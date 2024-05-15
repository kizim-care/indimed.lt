module.exports = function() {  
    return {
        componentsPath: function(path, template) {
            const slashCount = (path.match(/\//g) || []).length;

            return '../'.repeat(slashCount - 2) 
                + '_includes/components/'
                + template;
        },
    };
};
