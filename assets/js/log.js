window.onload = function() {
  init();
};

function init() {
  const elements = document.querySelectorAll('#filter input[type="checkbox"]');
  elements.forEach(function (e) {
    e.checked=false;  
    e.addEventListener('change', function() {
      revalidate()
    });
  });
}

function revalidate() {
  let techs = [];
  document.querySelectorAll('#filter [data-field="techs"] input:checked')
    .forEach(function (e) {
      techs.push(e.name);
    });

  let types = [];
  document.querySelectorAll('#filter [data-field="types"] input:checked')
    .forEach(function (e) {
      types.push(e.name);
    });

  const hasDoc = document.querySelector('#filter input[name="has-doc"]');
  const hasAccess = document.querySelector('#filter input[name="has-access"]');
  const hasDemo = document.querySelector('#filter input[name="has-demo"]');
  const hasDownload = document.querySelector('#filter input[name="has-download"]');

  const hasWip = document.querySelector('#filter input[name="wip"]');

  projects().forEach(function(e) {
    const techsp = JSON.parse(e.dataset.techs);
    const typep = e.dataset.type;
    const hasDocp = e.dataset.hasdoc === 'true';
    const hasAccessp = e.dataset.hasaccess === 'true';
    const hasDemop = e.dataset.hasdemo === 'true';
    const hasDownloadp = e.dataset.hasdownload === 'true';
    const isWip = e.dataset.wip === 'true';

    const aoMenosUmaTech = techsp.findIndex(t => techs.includes(t)) >= 0;

    const filtraTechsSeRequerido = !!techs.length ? aoMenosUmaTech : true;
    const filtraTypesSeRequerido = !!types.length ? types.includes(typep) : true;

    const filtraStatus = hasWip.checked ? isWip : true;

    const deveFiltrarPorLink = hasDoc.checked || hasDemo.checked || hasDownload.checked || hasAccess.checked;
    const filtraDocSeRequerido = deveFiltrarPorLink || hasDoc.checked ? hasDoc.checked && hasDocp : true;
    const filtraDemoSeRequerido = deveFiltrarPorLink || hasDemo.checked ? hasDemo.checked && hasDemop : true;
    const filtraDownloadSeRequerido = deveFiltrarPorLink || hasDownload.checked ? hasDownload.checked && hasDownloadp : true;
    const filtraAccessSeRequerido = deveFiltrarPorLink || hasAccess.checked ? hasAccess.checked && hasAccessp : true;

    // console.log({filtraTechsSeRequerido, filtraTypesSeRequerido, filtraStatus, filtraDocSeRequerido, filtraDemoSeRequerido, filtraDownloadSeRequeridom, filtraAccessSeRequerido})

    if(filtraTechsSeRequerido
      && filtraTypesSeRequerido
      && filtraStatus
      && ( filtraDocSeRequerido
        || filtraDemoSeRequerido
        || filtraDownloadSeRequerido
        || filtraAccessSeRequerido)) {
      showProject(e);
    } else {
      hideProject(e);
    }
  });
}

function projects() {
  return document.querySelectorAll('#projects > li');
}

function hideProject(element) {
  element.classList.add("not-filtered");
}

function showProject(element) {
  element.classList.remove("not-filtered");
}
