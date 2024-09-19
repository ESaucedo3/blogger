import { Blog } from "@/models/Blog.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { logger } from "@/utils/Logger.js";

class BlogsService {
  async getBlogs() {
    const response = await api.get("api/blogs");
    const newBlogs = response.data.map((blog) => new Blog(blog));
    AppState.blogs = newBlogs;
  }
  setActiveBlog(props) {
    AppState.activeBlog = props
    logger.log(`set active Blog`, props)
  }
}

export const blogsService = new BlogsService();
