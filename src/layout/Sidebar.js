import React from 'react'
import twitterLogo from '../images/twitter.svg'
import {
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon
} from '../icons/Icon';
import SideLink from '../components/SideLink';
const Sidebar = () => {
    const sideLinks = [
        {
          name: "Home",
          icon: HomeIcon,
        },
        {
          name: "Explore",
          icon: ExploreIcon,
        },
        {
          name: "Notifications",
          icon: NotificationsIcon,
        },
        {
          name: "Messages",
          icon: MessagesIcon,
        },
        {
          name: "Bookmarks",
          icon: BookmarksIcon,
        },
        {
          name: "Lists",
          icon: ListsIcon,
        },
        {
          name: "Profile",
          icon: ProfileIcon,
        },
        {
          name: "More",
          icon: MoreIcon,
        },
      ];
    return (
        <div className="flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-ligthest transform transition-colors duration-200">
                <img src={twitterLogo} alt={'twitterLogo'} className="w-9 h-9" />
                </div>
                <nav className="mb-4">
                    <ul>
                      {sideLinks.map(({name, icon}) => (
                          <SideLink key={name} name={name} Icon={icon} />
                      ))}

                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full px-8 py-3 w-11/12 transform transition-colors duration-200">Tweet</button>
            </div>
            <div>Alt taraf</div>
        </div>
    )
}

export default Sidebar
