$('.iframe-full-height').on('load', function() {
    this.style.height = this.contentDocument.body.scrollHeight + 'px';
});