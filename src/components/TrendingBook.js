import React from "react";
import { Link } from "react-router-dom";
import {
    MdOutlineShoppingCart,
    MdFavoriteBorder,
    MdOutlineEast,
} from "react-icons/md";

export default function TrendingBook({ book }) {
    return (
        <div className="pl-5 md:px-20 flex gap-5 md:gap-10 items-center  h-full bg-base-200 rounded-lg">
            {book.cover ? (
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-32 h-52 md:w-52 md:h-72 object-contain rounded-lg"
                />
            ) : (
                <div className="w-32 h-52 md:w-52 md:h-72 object-fill rounded-lg border grid place-content-center">
                    <h1 className="text-orange-400 text-sm">{book.title}</h1>
                </div>
            )}
            <div className="self-start mt-12 md:mt-32 flex flex-col gap-3">
                <h3 className="text-xs md:text-md">{book.author}</h3>
                <h1 className="text-md md:text-2xl text-white">{book.title}</h1>
                <p className="text-md md:text-2xl text-orange-300">
                    ${book.price}
                </p>
                <div className="gap-5 mt-3 hidden md:flex">
                    <button className="hover:text-orange-300 transition ease-in-out duration-150">
                        <MdOutlineShoppingCart style={{ fontSize: "24px" }} />
                    </button>
                    <button className="hover:text-orange-300 transition ease-in-out duration-150">
                        <MdFavoriteBorder style={{ fontSize: "24px" }} />
                    </button>
                </div>
                <Link
                    to={`/trending/${book.id}`}
                    type="button"
                    class="flex gap-3 items-center text-white bg-gray-700 hover:bg-gray-900 shadow-md focus:outline-none w-fit rounded-lg px-2 py-2 mt-3 text-xs md:text-sm"
                >
                    Read more <MdOutlineEast style={{ fontSize: "18px" }} />
                </Link>
            </div>
        </div>
    );
}