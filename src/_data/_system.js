let _locals;

try {
  _locals = require('./_local');
} catch (err) {
  _locals = {};
}

module.exports = function() {  
    return {
        componentsPath: function(path, template) {
            const slashCount = (path.match(/\//g) || []).length;

            return '../'.repeat(slashCount - 2) 
                + '_includes/components/'
                + template;
        },
        formLink: _locals.formLink || 'https_colon__slash__slash_templid_dot_com_slash_webhooks_slash_31_slash_e31097ffb1abb98086698bd32d340cf0_slash_indimedlt',
    };
};
