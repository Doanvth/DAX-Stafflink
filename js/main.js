function activateTab(element) {
        var allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach(tab => tab.classList.remove('active'));
        element.classList.add('active');
}