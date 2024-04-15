export default function UserRole(props) {
    function toggleInformation() { 
                const dropdown = document.getElementById('profileDropdown');
                dropdown.classList.toggle('hidden');
    }
                
    return (
        <><div class="relative inline-block text-left">
            {/* < />!-- Profile picture --> */}
            <div class="m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white cursor-pointer"
                onClick={toggleInformation}>
                <img src="http://source.unsplash.com/100x100/?woman" class="rounded-full" alt="Profile Picture" />
                {/* < />!-- Green status indicator --> */}
                <div class="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            {/* < />!-- Dropdown menu --> */}
            <div id="profileDropdown" class="informations hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <div class="py-3 px-5">
                    <p class="text-sm text-gray-500">Signed in as</p>
                    <p class="text-sm font-medium text-gray-800">james@site.com</p>
                </div>
                <div class="text-xs text-gray-500 px-5 py-2 border-t border-gray-200">
                    Admin
                </div>
            </div>
        </div>
        </>
    );
    
}