document.addEventListener('DOMContentLoaded', () => {
    showBlog(0); // Show the first blog by default
    checkScreenSize();
});

function showBlog(index) {
    const blogDetails = document.querySelectorAll('.blog-detail');
    blogDetails.forEach((blogDetail, i) => {
        if (i === index) {
            blogDetail.classList.add('active');
        } else {
            blogDetail.classList.remove('active');
        }
    });

    // Handle small screen view
    const blogContent = document.getElementById('blogContent');
    if (window.innerWidth <= 768) {
        blogContent.style.display = 'block';
        document.querySelector('.blog-list').style.display = 'none';
        document.getElementById('backButton').style.display = 'block';
    }
}

function goBack() {
    if (window.innerWidth <= 768) {
        document.querySelector('.blog-list').style.display = 'block';
        document.getElementById('blogContent').style.display = 'none';
        document.getElementById('backButton').style.display = 'none';
    }
}

function checkScreenSize() {
    window.onresize = () => {
        if (window.innerWidth > 768) {
            document.querySelector('.blog-list').style.display = 'block';
            document.getElementById('blogContent').style.display = 'block';
            document.getElementById('backButton').style.display = 'none';
        } else {
            goBack(); // Reset to list view on resize to small screen
        }
    };
}
