import React from 'react';
import '../imports/startup/client';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.js';

Meteor.startup(() => {

      var require = __meteor_bootstrap__.require;
      var path = require('path');
      var base = path.resolve('.');
      var isBundle = path.existsSync(base + '/bundle');
      var modulePath = base + (isBundle ? '/bundle/static' : '/public') + '/node_modules';

      var MODULE_NAME = require(modulePath + '/MODULE_NAME');
  // initialize smooth scroll library
  smoothScroll.init();
  $('body').addClass('page');
  $(".loading").remove();

  $(document).ready(function() {
    $('select').material_select();
  });

  render(renderRoutes(), document.getElementById('react-root'));
});
