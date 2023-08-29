export default {
  translations: {
    home: {
      "first-card": {
        title: "¡Felicitaciones por crear tu app!",
        description:
          "Esta app de ejemplo incluye nuestro <0>Design System Nimbus</0> y la integración con la <1>API de Tiendanube/Nuvemshop</1> para facilitar el desarrollo de nuevas aplicaciones para nuestro ecosistema.",
        link: {
          text: "Conocé más sobre cómo crear tu app",
          url: "https://atendimento.nuvemshop.com.br/pt_BR/parceiros-tecnologicos/como-fazer-um-aplicativo-para-a-loja-de-aplicativos-nuvemshop#nome-do-aplicativo",
        },
      },
      "second-card": {
        title: "Contador de produtos de Tienda demo",
        description:
          "Los productos de ejemplo se crean con un nombre y precio aleatorios, a modo de prueba. Podés modificarlos o eliminarlos en cualquier momento.",
        "total-product": "Total de productos",
        "create-products": "Crear producto",
      },
    },
    tutorial: {
      title: "Finalizá el proceso de autenticación",
      first:
        "Accedé a <0>Datos básicos</0> en detalles de la aplicación, en el portal de socios. En el campo URL de redireccionamiento, copiá y pegá la dirección",
      second:
        "En el campo URL de redireccionamiento, copiá y pegá la dirección <0>http://localhost:8000</0>",
      third:
        "Copiá esta terminación de la URL <0>/admin/apps/{{clientId}}/authorize</0> y pegala en el final de la URL de la tienda donde vas a instalar la app",
      fourth:
        "Clickeá el botón <0>Aceptar y comenzar a usar</0> para instalar la aplicación",
      fifth:
        "Después de ser redireccionado para Template de aplicación, la solicitud será ejecutada y el proceso de autenticación estará terminado.",
    },
    products: {
      title: "Productos de la tienda",
      name: "Nombre",
      remove: "Eliminar",
      "no-content": "No hay productos para mostrar",
      selected: {
        single: "Seleccionado",
        many: "Seleccionados",
      },
    },
  },
};
