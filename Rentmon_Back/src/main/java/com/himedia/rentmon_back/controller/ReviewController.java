package com.himedia.rentmon_back.controller;

import com.himedia.rentmon_back.dto.ReplyRequest;
import com.himedia.rentmon_back.entity.Review;
import com.himedia.rentmon_back.entity.ReviewImage;
import com.himedia.rentmon_back.service.ReviewService;
import com.himedia.rentmon_back.service.S3UploadService;
import com.himedia.rentmon_back.service.SpaceService;
import com.himedia.rentmon_back.util.PagingMj;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewController {

    private final SpaceService ss;
    private final ReviewService reviewService;

    @Autowired
    S3UploadService sus;

    @PostMapping("/InsertReview")
    public ResponseEntity<Review> InsertReview(@RequestPart("review") Review review, @RequestPart(value = "images", required = false) List<MultipartFile> images){
        if (images != null && !images.isEmpty()) {
            List<ReviewImage> reviewImages = new ArrayList<>();
            for (MultipartFile file : images) {
                try {

                    String uploadFilePathName = sus.saveFile( file, "review_images");

                    // Create ReviewImage object and set properties
                    ReviewImage image = new ReviewImage();
                    image.setOriginname(uploadFilePathName);
                    image.setRealname(uploadFilePathName);
                    reviewImages.add(image);

                } catch (IllegalStateException | IOException e) {
                    e.printStackTrace();
                    // Optionally handle the error and provide feedback
                }
            }
            review.setImages(reviewImages);
        }

        Review savedReview = reviewService.InsertReview(review);
        return ResponseEntity.ok(savedReview);
    }

    @GetMapping("/GetReviews/{sseq}")
    public ResponseEntity<List<Review>> GetReviews(@PathVariable("sseq") int sseq){
        try{
            List<Review> reviews = reviewService.getReviewList(sseq);
            return ResponseEntity.ok(reviews);
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/GetReviewList/{sseq}")
    public ResponseEntity<Map<String, Object>> GetReviewList(@PathVariable("sseq") int sseq, @RequestParam("page") int page){
        Map<String, Object> map = new HashMap<>();
        PagingMj paging = new PagingMj();
        paging.setCurrentPage(page);
        paging.setRecordAllcount(reviewService.getReviewALlCount(sseq));
        List<Review> list = reviewService.getReviewListwithPage(sseq,paging);
        map.put("list", list);
        map.put("paging", paging);
        return ResponseEntity.ok(map);
    }


    @GetMapping("/getsseq")
    public ResponseEntity<List<Review>> getSseqsByHostid(@RequestParam("hostid") String hostid) {
        try {
            List<Integer> sseqs = ss.findSseqsByHostid(hostid);
            System.out.println(sseqs + "--------------------------여기보세요 ------------------------------------------------");
            List<Review> reviews = reviewService.findReviewsBysseq(sseqs);
            // 여기부분에 sseqs 과 관련된 모든 예약정보를 찾는 코드
            return ResponseEntity.ok(reviews);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/insertreply")
    public ResponseEntity<Review> addReply(@RequestBody ReplyRequest replyRequest) {
        Review updatedReview = reviewService.addReply(replyRequest.getRseq(), replyRequest.getReply());
        return ResponseEntity.ok(updatedReview);
    }

    @GetMapping("/delete/{rseq}")
    public ResponseEntity<String> delete(@PathVariable Integer rseq) {
        reviewService.deleteReview(rseq);
        return ResponseEntity.ok("ok");
    }

}
