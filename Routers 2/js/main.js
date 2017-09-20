// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.



var ArtistView = Backbone.View.extend({
    render: function() {
        this.$el.html("Artist view");
        return this;
    }
})

var AlbumsView = Backbone.View.extend({
    render: function() {
        this.$el.html("Albums view");
        return this;
    }
})

var GenresView = Backbone.View.extend({
    render: function() {
        this.$el.html("genres view");
        return this;
    }
});


var AppRouter = Backbone.Router.extend({
    routes: {
        "albums": "viewAlbums",
        "albums/:albumId": "viewAlbumById",
        "artists": "viewArtist",
        "genres": "viewGenres",
        "*other": "defaultRoute"
    },
    viewArtist: function() {
        var view = new ArtistView({ el: "#container" });
        view.render();

    },
    viewGenres: function() {
        var view = new GenresView({ el: "#container" });
        view.render();
    },
    viewAlbumById: function(albumId) {

    },
    defaultRoute: function() {

    },
    viewAlbums: function() {
        var view = new AlbumsView({ el: "#container" });
        view.render();
    }
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
    events: {
        "click": "onClick"
    },

    onClick: function(e) {
        var $li = $(e.target);
        router.navigate($li.attr("data-url"), { trigger: true })
    }


});

var navView = new NavView({ el: "#nav" })