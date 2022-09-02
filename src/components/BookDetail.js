import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { delimiter } from "../utils/delimiter";
import { cover_not_found } from "../assets";
import { Loading } from "./";
import useAxios from "../hooks/useAxios";

export default function BookDetail() {
    const { category, bookId } = useParams();
    const [bookDetails, setBookDetails] = useState();
    const [bookAuthors, setBookAuthors] = useState();

    const { bookDetailsData, authors } = useAxios({
        bookId: bookId,
    });

    useEffect(() => {
        setBookDetails(bookDetailsData);
    }, [bookDetailsData]);

    useEffect(() => {
        setBookAuthors(authors);
    }, [authors]);

    return (
        <>
            <div className="text-sm breadcrumbs  w-9/12 md:w-11/12 mx-auto">
                <ul className="mt-10 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {category === "comics" ||
                        category === "best-sellers" ||
                        category === "trends" ||
                        category === "new-arrivals" ? (
                            category
                        ) : (
                            <Link to={`/${category}`}>{category}</Link>
                        )}
                    </li>
                    <li>{bookDetails ? bookDetails.title : ""}</li>
                </ul>
            </div>

            <div className="flex justify-center w-full">
                {bookDetails ? (
                    <section className="body-font overflow-hidden bg-slate-800 lg:min-h-[600px] w-11/12 mx-auto my-5 rounded-lg flex items-center justify-center">
                        <div className="w-9/12 px-5 py-5 mx-auto ">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap rounded-lg">
                                {bookDetails.cover ? (
                                    <img
                                        alt={bookDetails.title}
                                        className="lg:w-1/2 w-full h-[400px] object-contain object-center rounded-lg"
                                        src={bookDetails.cover}
                                    />
                                ) : (
                                    <img
                                        alt={bookDetails.title}
                                        className="lg:w-1/2 w-full h-[400px] object-contain object-center rounded-lg"
                                        src={cover_not_found}
                                    />
                                )}
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-orange-400 tracking-widest">
                                        {category}
                                    </h2>
                                    <h1 className="text-slate-100 text-2xl title-font font-medium mb-1">
                                        {bookDetails.title}
                                    </h1>
                                    <p className="text-xs text-orange-300 ">
                                        by:{" "}
                                        {bookAuthors && (
                                            <span className="text-white">
                                                {bookAuthors}
                                            </span>
                                        )}
                                    </p>
                                    <hr className="my-5" />
                                    <h2 className="text-sm title-font text-orange-400 tracking-widest">
                                        Description:
                                    </h2>
                                    <p className="leading-relaxed text-orange-200">
                                        {delimiter(
                                            bookDetails.description,
                                            100
                                        )}
                                    </p>

                                    <div className="flex mt-5 justify-between items-center">
                                        <span className="title-font font-medium text-2xl text-slate-400">
                                            ${bookDetails.price}.00
                                        </span>
                                        <div className="flex gap-5 items-center">
                                            <Tooltip content="Add to Cart">
                                                <button className="text-orange-300">
                                                    <MdOutlineShoppingCart
                                                        style={{
                                                            fontSize: "24px",
                                                        }}
                                                    />
                                                </button>
                                            </Tooltip>

                                            <Tooltip content="Add to Favorites">
                                                <button className="text-orange-300">
                                                    <MdFavoriteBorder
                                                        style={{
                                                            fontSize: "24px",
                                                        }}
                                                    />
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
}
