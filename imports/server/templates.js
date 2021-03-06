import i18n from 'meteor/universe:i18n';

// to enable {{variable}} syntax in templates
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

export const welcomeTemplate = function(name) {
  const t = _.template(i18n.__('templates.welcome'));
  return t({fullName: name});
}
