/**
 * @author Script47
 * @version 12/07/2017 (1.0)
 * @github https://github.com/Script47/.js/src/local_storage.js
 */
function local_storage() {
    this.set = {
        single: function (key, value, callback) {
            localStorage.setItem(key, value);

            return (typeof callback === 'function') ? callback() : true;
        },

        multiple: function (o, callback) {
            for (var key in o)
                if (o.hasOwnProperty(key))
                    localStorage.setItem(key, o[key]);

            return (typeof callback === 'function') ? callback() : true;
        },

        json: function (key, value, callback) {
            localStorage.setItem(key, JSON.stringify(value));

            return (typeof callback === 'function') ? callback() : true;
        }
    };

    this.get = {
        single: function (key, callback) {
            return (typeof callback === 'function') ? callback() : localStorage.getItem(key);
        },

        json: function (key, callback) {
            return (typeof callback === 'function') ? callback() : JSON.parse(localStorage.getItem(key));
        }
    };

    this.clear = {
        single: function (key, callback) {
            localStorage.removeItem(key);

            return (typeof callback === 'function') ? callback() : true;
        },

        multiple: function (a, callback) {
            for (var key in a)
                if (a.hasOwnProperty(key))
                    localStorage.removeItem(key);

            return (typeof callback === 'function') ? callback() : true;
        },

        all: function (callback) {
            localStorage.clear();

            return (typeof callback === 'function') ? callback() : true;
        }
    };

    this.exists = function (key) {
        return (localStorage.getItem(key) !== null) ? true : false;
    };
}