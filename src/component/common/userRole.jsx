import React, { useState, useEffect, useRef } from 'react';

function ProfileDropdown() {
    const [isShown, setIsShown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    function toggleInformation() {
        setIsShown(prevState => !prevState);
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Profile picture */}
            <div
                className="m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white cursor-pointer"
                onClick={toggleInformation}
            >
                <img
                    src="http://source.unsplash.com/100x100/?woman"
                    className="rounded-full"
                    alt="Profile Picture"
                />
                {/* Green status indicator */}
                <div className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            {/* Dropdown menu */}
            {isShown && (
                <div className="informations absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <div className="py-3 px-5">
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="text-sm font-medium text-gray-800">james@site.com</p>
                    </div>
                    <div className="text-xs text-gray-500 px-5 py-2 border-t border-gray-200">
                        Admin
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
