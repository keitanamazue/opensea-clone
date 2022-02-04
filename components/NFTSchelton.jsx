import { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import Router from 'next/router'

const style = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer animate-pulse`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center bg-gray-400`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between drop-shadow-xl bg-gray-400`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm `,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
}

const NFTCard = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.nftImg} />
        </div>
        <div className={style.details}>
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>

          <div className="flex justify-end pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.nftImg} />
        </div>
        <div className={style.details}>
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>

          <div className="flex justify-end pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.nftImg} />
        </div>
        <div className={style.details}>
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>

          <div className="flex justify-end pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.nftImg} />
        </div>
        <div className={style.details}>
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>

          <div className="flex justify-end pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img className={style.nftImg} />
        </div>
        <div className={style.details}>
          <div className="flex justify-between">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>

          <div className="flex justify-end pt-4">
            <div className="h-4 w-20 rounded bg-gray-400"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTCard
