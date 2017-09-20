var persn = {
    name: "Mosh",
    walk: function() {
        this.trigger("walking")
    }
};


_.extend(person, Backbonde.Events);