const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:5000", // Exemplo de configuração de proxy
  },
  // Outras opções podem ser adicionadas aqui
});
