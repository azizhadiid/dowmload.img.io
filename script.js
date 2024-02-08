document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button[data-download]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let imgId = this.getAttribute('data-download');
            let img = document.getElementById(imgId);
            let imgURL = img.getAttribute('src');
            let link = document.createElement('a');
            link.href = imgURL;
            link.download = 'downloaded_image.png';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
