var SongView = backbone.View.extend({
    render: function() {
        this.$el.html("Hello World");

        return this;
    }
});


var songView = new SongView({ el: "#container" });
dongView.render();