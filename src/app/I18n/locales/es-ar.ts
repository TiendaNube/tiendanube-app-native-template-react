export default {
  translations: {
    menu: {
      home: 'Comenzar',
      'examples-gallery': 'Galería de ejemplo',
      'store-products': 'Productos de mi tienda',
    },
    'base-layout': {
      help: 'Ayuda para desarrolladores',
      back: 'Voltar',
      'aria-label': {
        menu: 'Menú principal',
      },
    },
    home: {
      'first-card': {
        title: '¡Felicitaciones por crear su aplicación!',
        description:
          'Esta aplicación de ejemplo incluye nuestro <0>Nimbus Design System</0> y la integración con la <1>API Tiendanube/Nuvemshop</1> para facilitar el desarrollo de nuevas aplicaciones para nuestro ecosistema.',
        link: {
          text: 'Obtenga más información sobre cómo crear su aplicación',
          url: 'https://dev.tiendanube.com/docs/applications/overview',
        },
      },
      'second-card': {
        title: 'Mostrador de productos de la tienda',
        description:
          'Los productos de ejemplo se crean con el nombre y el precio aleatorios como ejemplo. Puedes modificarlos y eliminarlos en cualquier momento.',
        'total-product': 'Productos totales',
        'create-products': 'Crear producto',
      },
    },
    tutorial: {
      title: 'Completa el proceso de autenticación',
      first:
        'Acceda a <0>Datos básicos</0> en los detalles de la solicitud en el portal de socios. En el campo URL de redireccionamiento, copie y pegue la dirección',
      second:
        'En el campo URL de redireccionamiento, copie y pegue la dirección <0>http://{{appUrl}}</0>.',
      third:
        'Copia este final de la URL <0>/admin/apps/{{clientId}}/authorize</0> y pégalo al final de la URL de la tienda donde instalarás la aplicación.',
      fourth:
        'Haga clic en el botón <0>Aceptar y comenzar a usar</0> para instalar la aplicación.',
      fifth:
        'Después de la redirección a la plantilla de aplicación, se ejecutará la solicitud y se completará el proceso de autenticación.',
    },
    products: {
      title: 'Productos de la tienda',
      name: 'Nombre',
      remove: 'Borrar',
      'no-content': 'No hay productos para mostrar',
      selected: {
        single: 'Seleccionado',
        many: 'Seleccionados',
      },
    },
  },
};
