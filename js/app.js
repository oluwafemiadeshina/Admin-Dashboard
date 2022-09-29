

//SideBar Toggle
let sidebarOpen = false;
const sideBar = document.getElementById('sidebar');

const openSideBar = ()=>{
    if(!sidebarOpen){
        sideBar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}   

const closeSideBar = () => {
    if(!sidebarOpen){
        sideBar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}