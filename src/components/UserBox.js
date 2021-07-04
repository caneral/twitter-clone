import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://lh3.googleusercontent.com/proxy/di2cXOtpH6W13GtOAZ0wocpckSPayIz4VT_WCI5Skd77D1OsioWm2nMGYct58w4TwuWoiXOWUKM3VgkaH9MIg0GWIRP6Le0ckywqJco1Eokdt82RfikoDaksAwdewhp-kYqO7-s4ktYVvw" 
            alt="profile" 
            className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Caner Al
                </span>
                <span className="text-sm text-gray-dark">
                    @caner.al
                </span>
            </div>
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full " />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                
            </div>
        </div>
    )
}

export default UserBox
