var MovieModel = (function()
{
    function MovieModel()
    {

        this.Title = '';
        this.Year = 0;
        this.Genre = undefined;
        this.Description = '';
        this.ImageUrl = '';

    }

    MovieModel.prototype =
    {
        /* Title Getter and Setter */
        getTitle: function()        { return this.Title; },
        setTitle: function(title)   { this.Title = title; },
        /* Year Getter and Setter */
        getYear : function()        { return this.Year; },
        setYear : function(year)    { this.Year = year; },
        /* Genre Getter and Setter */
        getGenre : function()       { return this.Genre; },
        setGenre : function(genre)  { this.Genre = genre; },
        /* Description Getter and Setter */
        getDesc : function()        { return this.Description; },
        setDesc : function(desc)    { this.Description = desc; },
        /* Image Url Getter and Setter */
        getImgUrl : function()      { return this.ImageUrl; },
        setImgUrl : function(image) { this.ImageUrl = image; }
    };

    return MovieModel;
})();

module.exports = MovieModel;