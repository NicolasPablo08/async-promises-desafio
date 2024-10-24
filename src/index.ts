import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  controller.promesa.then(() => {
    //el then es el aviso cuando termine la promesa de ejecutar los datos, para luego pasarlos al resto del codigo
    const params = parseaParams(process.argv.slice(2));
    const result = controller.processOptions(params);
    console.log(result);
  });
}

main();
//ts-node index.ts --action get --params '{"id:2"}'
