import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}); //await부분이 끝나기 전까지 render를 실행하지 않는다
    console.log(videos);
    res.render("home", { pageTitle: "Home", videos: videos }); //-> 해당 비디오가 여기 videos에 저장된다.
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  //console.log(req);
  const {
    query: { term: searchingBy }
  } = req;
  //console.log(term);
  //const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy, videos: videos });
};

//export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const { body, file } = req;
  console.log(body, file);
  //console.log(file, title, description);
  //할일: 비디오 업로드 저장
  res.render("upload", { pageTitle: "Upload" });
  // res.redirect(routes.videoDetail(323394));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "deleteVideo" });
