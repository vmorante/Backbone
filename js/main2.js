var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
})

var SongView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get("title"));
        return this;
    }
});

var SongsView = Backbone.View.extend({
    events: {
        "click": "onClick",
        "click .bookmark": "onClickBookmark"
    },
    onClick: function() {
        console.log("Listen clicked");
    },
    onClickBookmark: function() {
        console.log("BookMARK clicked")

    },

    render: function() {
        // var self = this;
        // //this.$el.html("Hello World");
        // this.model.each(function(song) {
        //     var songView = new SongView({ model: song });
        //     self.$el.append(songView.render().$el);
        //});
        this.$el.html(this.model.get("title") + "<button>Listen</button><button class='bookmark'>Bookmark</button>")

    }
});

var songs = new Songs([
    new Song({ title: "Blue in green" }),
    new Song({ title: "So what" }),
    new Song({ title: "all blues" })
]);

var song = new Song({ title: "Blue in Green" })
var songsView = new SongsView({ el: "#container", model: song });
songsView.render();