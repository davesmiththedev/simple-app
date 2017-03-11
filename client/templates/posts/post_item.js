Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        Session.set('pageTitle', 'Poop');
        return a.hostname;
    }
});