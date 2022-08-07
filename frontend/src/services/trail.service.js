import http from "../http-common";

class TrailDataService {
  getAll() {
    return http.get("/trails");
  }
  get(id) {
    return http.get(`/trails/${id}`);
  }
  create(data) {
    return http.post("/trails", data);
  }
  update(id, data) {
    return http.put(`/trails/${id}`, data);
  }
  delete(id) {
    return http.delete(`/trails/${id}`);
  }
}

export default new TrailDataService();
