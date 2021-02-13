/**
 * class base for handling CRUD
 */
import HttpClient from "@/api/HttpClient";

export default class BaseAPI {
  /**
   * prefix of api
   */
  prefix = null;

  constructor() {
    this.service = HttpClient.getInstance();
  }

  /**
   * @override
   */
  getUrl() {
    return this.prefix;
  }

  getAll() {
    return this.service.request({
      url: this.getUrl(),
      method: "get"
    });
  }

  /**
   * get paging
   * options contains:
   * 1. pageNumber
   * 2. pageSize
   * 3. filter
   * 4. sort
   * @param {'*'} options
   */
  getPaging(options) {}

  getById(id) {
    let url = this.getFetchUrl(id);
    return this.service.request({
      url: url,
      method: "get"
    });
  }

  getFetchUrl(id) {
    return `${this.getUrl()}/${id}`;
  }

  post(payload) {
    debugger;
    return this.service.request({
      url: this.getUrl(),
      method: "post",
      data: payload
    });
  }

  put(payload) {
    let id = this.getPayloadId(payload),
      url = this.getPutUrl(id);
    debugger;
    return this.service.request({
      url: url,
      method: "put",
      data: payload
    });
  }

  getPutUrl(id) {
    return `${this.getUrl()}/${id}`;
  }

  getPayloadId(payload = {}) {
    if (payload.getIdProperty instanceof Function) {
      return payload.getIdProperty();
    } else {
      return payload["id"];
    }
  }

  delete(id) {
    let url = this.getDeleteUrl(id);
    debugger;
    return this.service.request({
      url: url,
      method: "delete"
    });
  }

  getDeleteUrl(id) {
    return `${this.getUrl()}/${id}`;
  }
}