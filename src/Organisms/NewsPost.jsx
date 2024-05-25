import {Link} from "react-router-dom";
import Pagination from "../Atoms/Pagination";

const NewsPost = ({post}) => {
    return (
        <div className="mb-12 flex flex-wrap justify-center my-7">
            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
                <div
                    className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src={post.urlToImage} className="w-full"/>
                    <a href="#!">
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                        </div>
                    </a>
                </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
                <h5 className="mb-3 text-lg font-bold">
                    {post.title}
                </h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    <small>Published by<span> </span>
                        <a href="#!">{post.author}</a></small>
                </p>
                <p className="mb-6">
                    {post.description}
                </p>
                <a data-te-ripple-init data-te-ripple-color="light"
                   href={post.url}
                   className="inline-block rounded-full bg-blue-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    role="button">Read more</a>
            </div>
        </div>
    )
}
export default NewsPost;