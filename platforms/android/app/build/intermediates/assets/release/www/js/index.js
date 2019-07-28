var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.addEventListener('backbutton', function(event){
          event.preventDefault();
        }, false);
    },
    receivedEvent: function(id) {
    }
};
app.initialize();
