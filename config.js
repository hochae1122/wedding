/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "임호성",
    father: "임태식",
    mother: "이난영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "신채민",
    father: "신호진",
    mother: "고금희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-22",
    time: "14:00",
    venue: "잠실 아펠가모",
    address: "올림픽로35길 137 한국광고문화회관 2층",
    mapLinks: {
      kakao: "https://map.kakao.com/21401219",
      naver: "https://map.naver.com/p/entry/place/19816148?placePath=%2Fhome%3Fentry%3Dplt%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607211134%26locale%3Dko%26svcName%3Dmap_pcv5&searchType=place&lng=127.0994500&lat=37.5161749&c=15.00,0,0,0,dh"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "각자의 길을 걷던 두 사람이 만나\n이제 평생을 함께 걷고자 합니다.\n\n11월의 깊어가는 날,\n저희의 첫걸음을 따뜻하게 축복해 주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "임호성", bank: "OO은행", number: "000-000-000000" },
      { role: "임태식", bank: "OO은행", number: "000-00-000000" },
      { role: "이난영", bank: "OO은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "신채민", bank: "OO은행", number: "00000-0000-00" },
      { role: "신호진", bank: "OO은행", number: "000000-00-000000" },
      { role: "고금희", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 11월 22일, 소중한 분들을 초대합니다."
  }
};
