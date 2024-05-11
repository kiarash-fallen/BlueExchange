import Image from 'next/image'
import React from 'react'
import Folder from "../../../public/assests/images/folder.svg"

function EmptyMessage() {
    return (
        <div className="flex flex-col items-center text-white">
            <Image src={Folder} width="auto" height="auto" alt='folder' />
            <p className="mt-4  text-2xl	">هنوز پیامی فرستاده یا ارسال نشده است !</p>
        </div>
    )
}

export default EmptyMessage