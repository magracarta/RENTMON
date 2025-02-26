import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCookie, setAuthoCookie } from "../../util/cookieUtil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KakaoMap from "../../util/KakaoMap";
import "./style/inquiry.css";
import InquiryList from "./component/InquiryList";
import ReviewList from "./component/ReviewList";
import ReportModal from "./component/ReportModal";

const { kakao } = window;

const settings = {
  dot: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SpaceDetail() {
  const [inquiryopen, setInquiryopen] = useState(false);
  const [reviewopen, setReviewopen] = useState(false);
  const [reportopen, setReportopen] = useState(false);
  const user = useSelector((state) => state.user);
  const [space, setSpace] = useState({});
  const navigate = useNavigate();
  const { sseq } = useParams();

  const [content, setContent] = useState("");
  const [rate, setRate] = useState(0);
  const [images, setImages] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [inquiryList, setInquiryList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [zzimCount, setZzimCount] = useState();
  const [kakaoAddress, setKakaoAddress] = useState("");

  const [zzimOn, setZzimOn] = useState(false);

  // 각 섹션에 대한 참조 생성
  const spaceInfoRef = useRef(null);
  const spaceFacilitiesRef = useRef(null);
  const spaceMapRef = useRef(null);
  const inquiryListRef = useRef(null);
  const reviewListRef = useRef(null);

  // 메뉴 높이
  const menuHeight = 150;

  // 해당 섹션으로 스크롤하는 함수
  const scrollToSection = (ref) => {
    const offsetTop =
      ref.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - menuHeight,
      behavior: "smooth",
    });
  };

  // Space 조회
  useEffect(() => {
    axios
      .get(`/api/space/getSpace/${sseq}`)
      .then((result) => {
        setSpace(result.data.space);
        setInquiryList(result.data.inquiryList);
        setTagList(result.data.hashtag);
        setZzimCount(result.data.zzimCount);
        setKakaoAddress(`${result.data.space.address}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // 찜 조회 및 토글
  useEffect(() => {
    const checkZzim = async () => {
      try {
        const response = await axios.get("/api/zzim/check", {
          params: { userid: user.userid, sseq },
        });
        setZzimOn(response.data.zzimOn);
      } catch (error) {
        console.error("Error checking zzim status", error);
      }
    };

    checkZzim();
  }, []);


  const checkReviewAble = async ()=>{
    try{
      console.log("전개")
      const result = await axios.get("/api/reservation/checkReservationStatus", {params:{userid : user.userid, sseq:sseq}})
      if(result.data === "OK"){
        setReviewopen(true);
      } else{
        alert("먼저 이용을 하셔야 합니다");
        return;
      }
    } catch(err){console.error(err)};
  }

  const toggleZzim = async () => {
    try {
      await axios.post("/api/zzim/toggle", null, {
        params: { userid: user.userid, sseq },
      });
      setZzimOn(!zzimOn);
    } catch (error) {
      console.error("Error toggling zzim", error);
    }
  };

  // 쿠키
  useEffect(() => {
    let rctvw = getCookie("rctvw");
    if (rctvw === undefined) rctvw = [];
    if (!rctvw.includes(sseq)) {
      if (sseq !== undefined) rctvw.unshift(sseq);
      if (rctvw.length >= 6) rctvw.pop();
    }
    setAuthoCookie("rctvw", rctvw, 60);
  }, []);

  return (
    <div className="spaceContainer innerContainer spaceDetail">
      <div>
        {/* spaceMenu Part */}
        <div
          className={`SpaceMenu-container ${
            inquiryopen || reviewopen || reportopen ? "hidden" : ""
          }`}
        >
          <div>
          {" "}
          <div
            className="SpaceMenu-item"
            onClick={() => scrollToSection(spaceInfoRef)}
          >
            공간 정보
          </div>
          <div
            className="SpaceMenu-item"
            onClick={() => scrollToSection(spaceFacilitiesRef)}
          >
            시설 안내
          </div>
          <div
            className="SpaceMenu-item"
            onClick={() => scrollToSection(spaceMapRef)}
          >
            지도
          </div>
          <div
            className="SpaceMenu-item"
            onClick={() => scrollToSection(inquiryListRef)}
          >
            문의
          </div>
          <div
            className="SpaceMenu-item"
            onClick={() => scrollToSection(reviewListRef)}
          >
            리뷰
          </div>
          <div
            className="SpaceMenu-item"
            onClick={() => navigate("/spaceList")}
          >
            돌아가기
          </div>
          </div>
        </div>

        {/* spaceInfo Part */}
        <div className="spaceMainTitle" ref={spaceInfoRef}></div>
        <div className="spaceInfo">
          {
            <Slider {...settings}>
              {space.spaceimage &&
                space.spaceimage.map((image, idx) => (
                  <div key={idx} className="spaceImageContainer">
                    <img
                      className="spaceImage"
                      src={`https://final-kimminju.s3.ap-northeast-2.amazonaws.com/space_images/${image.realName}`}
                      alt={space.title}
                    />
                  </div>
                ))}
            </Slider>
          }

          <div>
          <div className="spaceContentBlock">
            <div className="spaceTitle">제목</div>
            <div className="spaceContent">
              {space.sseq}. {space.title}
            </div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">부제목</div>
            <div className="spaceContent">{space.subtitle}</div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">내용</div>
            <div className="spaceContent">{space.content}</div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">대여가능 시간</div>
            <div className="spaceContent">
              {space.starttime}시 ~ {space.endtime}시
            </div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">주소</div>
            <div className="spaceContent">
              {space.province} {space.town} {space.village}{" "}
              {space.addressdetail}
            </div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">최대 수용인원</div>
            <div className="spaceContent">{space.maxpersonnal}인</div>
          </div>

          <div className="spaceContentBlock">
            <div className="spaceTitle">태그</div>
            <div className="spaceContent">
              {tagList
                ? tagList.map((tag, idx) => (
                    <span key={idx} style={{ marginRight: "10px" }}>
                      #{tag.word}
                    </span>
                  ))
                : null}
            </div>
          </div>
          </div>
        </div>

        <div className="spaceFacilities">
          <div className="spaceMainTitle" ref={spaceFacilitiesRef}></div>
          <div className="spaceTitle">시설 안내</div>
          {space.facilities ? (
            <div className="FacilityList">
              {space.facilities.map((facil, idx) => (
                <div className="FacilityContainer" key={facil.facility.fnum}>
                  <div className="Facility">
                    <img
                      src={`https://final-kimminju.s3.ap-northeast-2.amazonaws.com/icon_images/${facil.facility.icon}`}
                      alt={`${facil.facility.name} 아이콘`}
                      // style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div>{facil.facility.name}</div>
                </div>
              ))}
            </div>
          ) : null}
          <div className="spaceContentBlock">
            <div className="spaceTitle">주의사항</div>
            <div className="spaceContent">{space.caution}</div>
          </div>
        </div>

        <div className="spaceMap" ref={spaceMapRef}>
          <div className="spaceMainTitle"></div>
          <KakaoMap address={kakaoAddress} />
        </div>

        <div className="spaceButton">
          <div className="spaceMainTitle"></div>

          <button className={zzimOn ? "zzim-active" : ""} onClick={toggleZzim}>
            {" "}
            {zzimOn ? "찜 해제" : "찜 하기"}
          </button>
          <button
            onClick={() => {
              navigate(`/reservationForm/${space.sseq}`);
            }}
          >
            예약하기
          </button>
          <button
            onClick={() => {
              setInquiryopen(true);
            }}
          >
            문의하기
          </button>
          <button
            onClick={() => {
              checkReviewAble();
            }}
          >
            리뷰작성
          </button>
          <button
            onClick={() => {
              setReportopen(true);
            }}
          >
            신고하기
          </button>
        </div>

        <div ref={inquiryListRef}></div>
        <InquiryList
          sseq={sseq}
          inquiryopen={inquiryopen}
          setInquiryopen={setInquiryopen}
        />

        <div ref={reviewListRef}></div>
        <ReviewList
          sseq={sseq}
          reviewopen={reviewopen}
          setReviewopen={setReviewopen}
          ref={reviewListRef}
        />

        <ReportModal
          sseq={sseq}
          reportopen={reportopen}
          setReportopen={setReportopen}
        />
      </div>
    </div>
  );
}

export default SpaceDetail;
