define([], function () {
    return {
        /**
         * 此方法用来将用户传入url地址的所有的参数键值对儿转换成一个对象！
         */
        getQuery: function () {
            var queryString = location.search.slice(1);
            var kvArr = queryString.split("&");
            var obj = {};
            kvArr.forEach(function (v, i) {
                //v   key=value
                var kvPair = v.split("=");
                obj[kvPair[0]] = kvPair[1];
            })
            return obj;
        },
        getQueryByKey: function(key){
            return this.getQuery()[key];
        }
    }
})