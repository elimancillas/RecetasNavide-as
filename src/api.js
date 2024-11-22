// Datos simulados con imágenes
const mockRecipes = [
    {
      id: 1,
      name: "Pavo Relleno Navideño",
      description: "Un delicioso pavo relleno para celebrar la Navidad.",
      ingredients: ["1 Pavo grande", "1/2 Taza de jugo de limón", "1/2 Taza de cebolla Blanca Cortada en dados", "1/3 Taza de caldo casero sabor pollo", "1/4 Taza aceite de oliva", "8 Dientes de ajo", "1 Taza perejil sin cortar", "1 Libra Papas Rojas Cortadas en cuñas"],
      instructions:
       ["Colocar en un tazón el pavo, lavarlo y escurrirlo bien. ", "En una licuadora colocar los demás ingredientes menos las papas, procesar por 1 minuto. ", "Precalentar el horno a 250c°. ", "Rellenar el pavo con las papas rojas, verter la mezcla al pavo cubriéndolo por completo. Marinar por 30 minutos. ", "Hornear por 3 ½ horas a 180c°. ", "Retirar del horno dejar reposar 10 minutos a temperatura ambiente."],
      image: "https://www.gob.mx/cms/uploads/article/main_image/29629/pavo1.jpg",
    },
    {
      id: 2,
      name: "Ponche Navideño",
      description: "La bebida tradicional para las fiestas decembrinas.",
      ingredients: ["3 Litro de agua", "1/4 De taza de flor de jamaica", "6 Piezas de tamarindo limpio", "2 Cañas de azúcar peladas y cortadas en trozos pequeños", "1 Taza de tecojotes pelados", "1/2 Taza de piloncillo", "4 Guayabas partidas a la mitad", "2 Manzanas amarillas cortadas en gajos", "1/2 Taza de ciruelas pasas"],
      instructions:
        "Coloca en una olla el agua con la jamaica, el tamarindo, la caña de azúcar, los tejocotes y el piloncillo. Calienta a fuego medio por 15 minutos o hasta que la fruta se empiece a suavizar. Agrega la guayaba, la manzana y la ciruela, cocina a fuego bajo por 10 minutos más hasta que estén cocidas.",
      image: "https://cdn.milenio.com/uploads/media/2019/12/01/ponche-frutas-navideno-bebida-tradicional_0_3_958_596.jpg",
    },
    {
      id: 3,
      name: "Buñuelos",
      description: "Un postre típico navideño con un toque dulce y crujiente.",
      ingredients: ["1½ tazas de Harina de Trigo (300 gr)", "1 Huevo", "1/2 barra de Mantequilla", "1 cucharadita de Polvo para Hornear", "1 cucharadita de extracto de Vainilla", "1/2 cucharadita de Sal", "1 taza de Aceite Vegetal", "Canela al gusto", "2 Cucharadas de azúcar"],
      instructions:
        "Cierne sobre tu bowl, 1½ tazas de harina de trigo, con un colador. También agregar el huevo, la mantequilla, el polvo para hornear, el extracto e vainilla, la sal, el azúcar. Mezcla todos los ingredientes con las manos, hasta que tenga una mezcla homogénea. Vierte en el bowl, en intervalos, aproximadamente 3/4 de taza de agua tibia (188 ml) mientras trabajas la masa con las manos, hasta que tenga una textura suave y una consistencia elástica y firme. Cubre el bowl con un pedazo de plástico film y deja la masa reposando por 30 minutos. Haz con toda la masa que dejaste reposando pequeñas bolas de masa, del tamaño de una bola de golf aproximadamente; al finalizar reserva. Pon en una mesa de trabajo y en un rodillo un poco de harina. Pon en la mesa de trabajo una de las bolas de masa, aplástalas y empieza a amasar con el rodillo de adelante hacia atrás, hasta que tenga la forma de un óvalo. Gira el disco de masa 45º en sentido de las manecillas del reloj y amasa con el rodillo de adelante hacia atrás, hasta que la masa esté más delgada. Una vez más gira el disco de masa 45º en sentido de las manecillas del reloj y amasa con el rodillo de adelante hacia atrás, hasta que tenga la forma de un círculo. Al finalizar reserva. Repite el mismo procedimiento con todas las bolas de masa. Vierte en la sartén para saltear de 30 cm, aproximadamente 1 taza de aceite vegetal, de tal manera que tenga una capa de aceite de unos 1½ cm de altura. Calienta el aceite de la sartén a fuego medio-bajo. Toma con unas pinzas 1 disco de masa, sumérjalo en el aceite de la sartén y fríelo por unos 15 segundos por cada lado, hasta que esté medianamente frito. Transfiere de la sartén a unas servitoallas, con las pinzas, el buñuelo para que se seque y se absorba el exceso de grasa; después reserva. Repite el mismo procedimiento con los discos de masa que faltaron de freír, no va a ser necesario que agregues más aceite vegetal en la sartén. Espolvorea sobre los dos lados de cada buñuelo: Canela y azúcar al gusto",
      image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/15A4B8C8-F90F-49D5-9708-A8557443DC51/Derivates/66D143DB-DBC7-40A4-A91C-2DFE444AA240.jpg",
    },
    {
      id: 4,
      name: "Ensalada Navideña",
      description:
        "Una ensalada fresca con manzanas, nueces, piña y crema, ideal para acompañar.",
      ingredients: ["Manzana cortadas en cubos", "Nuez picada", "Piña en almíbar cortada en cuadritos", "Almíbar de piña", "Crema", "Pasas", "Cerezas rojas en almíbar", "Leche condensada LECHERA"],
      instructions:
        "Mezcla las manzanas con la nuez, la piña, las pasas, las cerezas, la Crema, el almíbar y la Leche Condensada LECHERA. Reserva. Refrigera por 30 minutos. ",
      image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/677dd43/2147483647/strip/true/crop/1024x1024+0+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F07%2F8c%2Fd4a9b77d49e1a370a542c9fdeea8%2Fensalada-de-manzana.jpg",
    },
    {
      id: 5,
      name: "Romeritos con Mole",
      description:
        "Un platillo tradicional mexicano que no puede faltar en Navidad.",
      ingredients: ["1 kilo de romeritos, bien limpios", "1/2 kilos de nopal, cortados en tiras", "1/2 Cebolla", "1 pizca de bicarbonato", "1/2 kilos de papa cambray, peladas", "100 gramos de camarón seco", "1 Huevo", "Aceites", "1/4 mole poblano, en pasta", "Sal al gusto"],
      instructions:
        "Coloca los romeritos en una cacerola con un poco de agua. Cocínalos un poco a fuego medio. No deben quedar completamente cocidos. Pon los nopales y la cebolla en una olla. Cúbrelos con agua y agrega el bicarbonato y la sal. Deja que suelten el hervor a fuego alto, reduce la flama, tapa y cocina a fuego lento hasta que se hayan ablandado, entre 15 y 20 minutos. Aparte, Cuece las papas en agua hirviendo hasta que se ablanden y puedas picarlas fácilmente con un tenedor, aproximadamente 15 minutos. Mientras, corta las cabezas y colas de los camarones y resérvalas. Remoja los camarones en agua caliente durante 10 minutos. Muele en seco las cabezas y colas de camarón en la licuadora o procesador de alimentos. Bate el huevo a punto de turrón y mézclalo con el polvo de camarón. Forma tortitas y fríelas en aceite. En una olla grande, disuelve la pasta de mole en el agua en que se remojó el camarón. Agrega los romeritos, nopales, papas y camarones. Cocina a fuego medio y sazona con sal al gusto. Deja que hierva un par de minutos y sirve caliente.",
      image: "https://cdn7.kiwilimon.com/recetaimagen/20405/640x640/8669.png.webp",
    },
    {
      id: 6,
      name: "Pierna de Cerdo al Horno",
      description: "Pierna de cerdo al horno queda muy jugosa e irrisistible en la temporada navideña.",
      ingredients: ["1 Pierna de cerdo entera con hueso, bien lavada", "1 Litro de leche", "1 Jeringa para inyectar", "1 Cabeza de ajos machacados o molidos en la licuadora con: 1 cebolla, el jugo de 5 limones, sal y pimienta"],
      instructions:
        "Unte la pierna de cerdo durante el día con la salsa molida de la licuadora. Marine por un día completo en refrigeración y déle vueltas cada vez que le inyecte, con la leche o el cava. Meta al horno muy caliente y rocié la carne varias veces. Al final del cocimiento la última hora rosíe con agua fría, esto es para que se dore. Se sirve fría o caliente.",
      image: "https://cocinamia.com.mx/wp-content/uploads/2018/12/recetario-navidad-imagenes-11-1100x500.png",
    },
    {
        id: 7,
        name: "Pollo con chipotle",
        description:
          "Platillo ideal para acompañar.",
        ingredients: ["1/2 Lata de chile chipotle", "1 Frasco pequeño de mayonesa", "1 Cucharada de caldo de pollo", "Sal al gusto", "1/2 Kilo de papas", "1 Kilo de pollo"],
        instructions:
          "Se coloca el pollo y las papas cortadas en cuadros medianos en el molde de vidrio, en la licuadora pone los chiles, la mayonesa y el caldo de pollo en polvo y los mueles, se lo agregas al pollo y las papas, lo tapas con papel alumnio y lo pones a cocer en el horno a 350° por 45 min. lo destapas y lo dejas unos 5 min. para que se dore un poco, lo puedes acompañar con espagueti.",
        image: "https://sabordemex.mx/wp-content/uploads/2024/09/pollo-en-crema-de-chipotle-facil-y-rapido.jpg",
      },
      {
        id: 8,
        name: "Pollo a la Crema",
        description:
          "Un platillo cremoso y reconfortante perfecto para las fiestas.",
        ingredients: [
          "1 Cucharada de Mantequilla",
          "1 Cucharada de Cebolla picada finamente",
          "1 Diente de Ajo picado finamente",
          "1 Lata de Leche Evaporada CARNATION",
          "1 Taza de Media Crema NESTLÉ",
          "3/4 Taza de Caldo de pollo",
          "1 Cucharada de Fécula de maíz",
          "1 Cucharada de Consomé de pollo en polvo",
          "5 Piezas de Pollo cocidas y sin piel",
          "2 Ramitas de Perejil fresco desinfectado y picado finamente",
          "2 Ramitas de Romero fresco desinfectado",
        ],
        instructions:
          "Calienta la mantequilla, fríe la cebolla con el ajo, cocina hasta que cambien de color. " +
          "Licúa la mezcla anterior con la Leche Evaporada CARNATION, la Media Crema NESTLÉ, el caldo de pollo, la fécula y el consomé de pollo. " +
          "Calienta lo que licuaste hasta que espese ligeramente, moviendo constantemente. " +
          "Añade el pollo a la salsa, cocina por 3 minutos más, sirve y decora con el perejil y el romero. ",
        image: "https://cdn0.recetasgratis.net/es/posts/9/3/2/pechuga_de_pollo_a_la_crema_42239_orig.jpg", 
      },
      {
        id: 9,
        name: "Lomo de Cerdo Relleno Adobado",
        description: "Un platillo elegante y delicioso perfecto para la Navidad.",
        ingredients: [
          "1/2 tazas de tocino, para el relleno, finamente picado",
          "1/2 cebollas, para el relleno, finamente picada",
          "1 cucharada de ajo, para el relleno, finamente picado",
          "2 tazas de manzana, para el relleno, cortada en cubitos",
          "1/4 tazas de pasita, para el relleno",
          "1/4 tazas de fruta seca, mixta, para el relleno",
          "1/2 tazas de almendra, fileteada, para el relleno",
          "1/2 tazas de nuez pecana, para el relleno, finamente picada",
          "Sal y pimienta al gusto",
          "Tomillo al gusto",
          "3 chiles anchos, para el adobo (desvenados y remojados)",
          "2 chiles guajillos, para el adobo (desvenados y remojados)",
          "3 chiles chipotles, para el adobo",
          "1/4 cebollas, para el adobo",
          "2 dientes de ajo, para el adobo",
          "1 cucharadita de orégano seco, para el adobo",
          "1 cucharadita de pimienta gorda, para el adobo",
          "1 cucharada de aceite, para el adobo",
          "2 kilos de lomo de cerdo, limpio y en sábana",
        ],
        instructions:
          "Precalienta el horno a 180°C. \n" +
          "Fríe el tocino en una sartén, agrega la cebolla, el ajo, las manzanas, las pasitas, las frutas secas, las almendras, las nueces. Cocina 10 minutos, salpimenta; deja enfriar y reserva. \n" +
          "Para el adobo, licúa el chile ancho, el chile guajillo, el chile chipotle, la cebolla, el ajo, el orégano y la pimienta gorda. \n" +
          "En una sartén a fuego medio agrega el aceite, vierte el adobo, cocina unos minutos y sazona. \n" +
          "Sobre una tabla de madera sazona el lomo con sal y pimienta, agrega el relleno y enrolla, brida con hilo de cáñamo. \n" +
          "Coloca sobre una charola y barniza con el adobo, cubre con papel aluminio y hornea alrededor de una hora o hasta que esté cocido. \n" +
          "Corta en rebanadas, sirve con ensalada y disfruta.",
        image: "https://cdn7.kiwilimon.com/recetaimagen/30120/960x720/32855.jpg.webp", 
      },
      {
        id: 10,
        name: "Galletas de Jengibre",
        description: "Un clásico navideño con un toque de jengibre y decoración colorida.",
        ingredients: [
          "1 1/2 Barras de mantequilla a temperatura ambiente (90 g c/u)",
          "1 Lata de Leche Condensada LA LECHERA",
          "2 Yemas de huevo",
          "2 Tazas de harina de trigo",
          "1 Cucharadita de polvo para hornear",
          "1/2 Cucharadita de canela molida",
          "1 Cucharadita de jengibre en polvo",
          "1 Taza de azúcar glass",
          "2 Cucharadas de agua",
          "Colorantes vegetales para alimentos (verde, rojo, etc.)",
        ],
        instructions:
          "Precalienta el horno a 180°C.\n" +
          "Para las galletas, bate la mantequilla hasta acremar, agrega la Leche Condensada LA LECHERA; añade las yemas, la harina, el polvo para hornear previamente pasados por un colador, la canela y el jengibre; bate hasta obtener una pasta tersa, envuélvela en plástico autoadherente y refrigera por 15 minutos.\n" +
          "Extiende la pasta sobre una mesa enharinada, con ayuda de cortadores da forma a las galletas.\n" +
          "Coloca en una charola para horno y hornea a 180°C de 15 a 20 minutos.\n" +
          "Para el glaseado, mezcla el azúcar glass con el agua hasta integrar, divide en 4 partes y agrega un poco de colorante en cada una.\n" +
          "Decora las galletas con el glaseado y deja secar.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/728f0b7f7f8e855a71396feed9e1d6be.webp?itok=bCcWQn68", 
      },
      {
        id: 11,
        name: "Champurrado",
        description: "Una bebida tradicional mexicana perfecta para las noches navideñas.",
        ingredients: [
          "300 Gramos de Masa de maíz",
          "1 1/2 Litros de Agua",
          "1/2 Pieza de Piloncillo (100 g)",
          "1 Pieza de Canela en raja",
          "1 Lata de Leche Evaporada CARNATION (1 1/2 tazas)",
          "1/4 Taza de Leche Condensada LA LECHERA",
          "3 Tabletas de Chocolate para mesa ABUELITA (90 g c/u)",
        ],
        instructions:
          "Licúa la masa con 2 tazas de agua.\n" +
          "Calienta el resto del agua con el piloncillo y la canela hasta que hierva.\n" +
          "Vierte lo que licuaste junto con la Leche Evaporada CARNATION, la Leche Condensada LA LECHERA y el Chocolate para Mesa ABUELITA.\n" +
          "Calienta hasta que espese, moviendo constantemente para evitar que se pegue.\n" +
          "Retira la canela y sirve caliente.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/6ded326a67a5d937f36cd85862561331.webp?itok=uHd3eVyL", 
      },
      {
        id: 12,
        name: "Atole Almendrado",
        description: "Una bebida cálida y reconfortante con el delicioso sabor de almendra.",
        ingredients: [
          "1 Lata Leche Evaporada CARNATION",
          "1 Pieza Canela en raja",
          "2 Cucharadas Fécula de maíz diluida en 1/4 de taza de agua",
          "1 Taza Almendras peladas y molidas",
          "1 Taza Azúcar",
        ],
        instructions:
          "Hierve la Leche Evaporada CARNATION con la canela.\n" +
          "Agrega la fécula de maíz disuelta y mueve constantemente hasta que hierva.\n" +
          "Añade las almendras molidas y el azúcar, mezcla hasta que todo esté bien incorporado.\n" +
          "Cocina por 10 minutos a fuego bajo, sin dejar de mover.\n" +
          "Sirve muy caliente, ideal para acompañar con pan o galletas.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/c6ccc836093ea341d8fa161667af904b.webp?itok=mRMvnSri", 
      },
      {
        id: 13,
        name: "Brownie Casero",
        description: "Un delicioso brownie con frambuesas y menta fresca.",
        ingredients: [
          "1 Barra de Mantequilla fundida (90 g)",
          "1/4 Taza de Leche Condensada LA LECHERA",
          "1 Huevo",
          "3/4 Taza de Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA",
          "2/3 Taza de Harina de trigo pasada por un colador",
          "1/2 Cucharadita de Polvo para hornear",
          "1/2 Taza de Frambuesas",
          "1/4 Taza de Azúcar glass",
          "6 Hojas de Menta fresca desinfectadas",
        ],
        instructions: 
          "Horno precalentado a 180 °C.\n" +
          "Mezcla la mantequilla con la Leche Condensada LA LECHERA, el huevo, el Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA, la harina y el polvo para hornear hasta integrar por completo.\n" +
          "Vierte la mezcla en un molde cubierto con papel encerado y hornea a 180 °C de 25 a 30 minutos; deja enfriar.\n" +
          "Desmolda, corta en cuadros, y decora con las frambuesas, el azúcar glass y las hojas de menta.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/cde835a2693e7dffdd8d82dca524dbe1.webp?itok=A66j9oGa", 
      },
      {
        id: 14,
        name: "Pasta con Crema de Cilantro y Queso",
        description: "Una deliciosa pasta bañada en una cremosa salsa de cilantro y queso.",
        ingredients: [
          "1 Manojo de cilantro desinfectado",
          "1 Chile jalapeño",
          "2 Paquetes de queso crema a temperatura ambiente (190 g c/u)",
          "2 Cucharadas de ajo picado finamente",
          "2 Cucharadas de consomé de pollo en polvo",
          "1 Lata de Leche Evaporada CARNATION",
          "1 Cucharada de mantequilla",
          "1 Paquete de pasta espagueti cocida",
        ],
        instructions: 
          "Vierte en el vaso el cilantro, el chile jalapeño, el queso crema, el ajo, el consomé de pollo, la Leche Evaporada CARNATION y la mantequilla.\n" +
          "Cocina por 10 minutos a temperatura de 120 °C y velocidad 4.\n" +
          "Sirve la crema sobre la pasta cocida y disfruta.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/c38e018504552de10e6b9547ded9e0f1.webp?itok=lBj7W4V8", 
      },
      {
        id: 15,
        name: "Espagueti Navideño con Tocino y Espinacas",
        description: "Un delicioso espagueti con una salsa cremosa, espinacas, tocino y un toque de queso parmesano.",
        ingredients: [
          "3 Cucharadas de Mantequilla",
          "1 Cucharadita de Ajo picado",
          "2 Tazas de Espinaca baby limpia",
          "1/2 Taza de Jitomates cherry cortados a la mitad",
          "1 Lata de Leche Evaporada CARNATION",
          "1 Lata de Media Crema NESTLÉ",
          "1/2 Taza de Agua",
          "1 Cucharada de Consomé de pollo en polvo",
          "1/4 Cucharadita de Sal con cebolla en polvo",
          "1 Cucharada Fécula de maíz disuelta en ½ taza de agua",
          "1 Paquete de Espagueti (200 g)",
          "8 Rebanadas de Tocino frito y picado",
          "1/2 Taza de Queso parmesano rallado",
        ],
        instructions: 
          "Calienta la mantequilla y fríe el ajo hasta que dore ligeramente, añade las espinacas, los jitomates cherry y cocina por 5 minutos.\n" +
          "Vierte la Leche Evaporada CARNATION, la Media Crema NESTLÉ, el agua, el consomé de pollo y la sal con cebolla, mezcla y cocina hasta que hierva.\n" +
          "Agrega la fécula de maíz disuelta y continúa la cocción hasta que espese ligeramente, moviendo constantemente.\n" +
          "Vierte el espagueti cocido y escurrido con el tocino, mezcla y calienta por 2 minutos.\n" +
          "Sirve y decora con un poco de queso parmesano.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/d40f5d8e6746144b5e65317c8f070adf.webp?itok=A2AP5ZZo", 
      },
      {
        id: 16,
        name: "Gelatina de Queso con Chocolate",
        description: "Una deliciosa gelatina suave de queso y chocolate, ideal para postre.",
        ingredients: [
          "1 Lata de Leche Evaporada CARNATION",
          "1 Bolsita de Leche Condensada LA LECHERA (209 g)",
          "2 Paquetes de queso crema a temperatura ambiente (190 g)",
          "3 Sobres de grenetina (7 g c/u), hidratados en ¼ taza de agua y disueltos a baño María",
          "1 Taza de cocoa",
          "1 Taza de agua",
          "6 Uvas rojas partidas a la mitad",
          "6 Uvas verdes partidas a la mitad",
        ],
        instructions:
          "Licúa la Leche Evaporada CARNATION con la Leche Condensada LA LECHERA, el queso crema y la grenetina.\n" +
          "Vierte la mezcla en un molde para gelatina previamente engrasado y refrigera hasta que cuaje.\n" +
          "Licúa la Leche Evaporada CARNATION con la Leche Condensada LA LECHERA, la cocoa, el agua y la grenetina.\n" +
          "Vierte la mezcla en el molde y refrigera hasta que cuaje.\n" +
          "Desmolda la gelatina, decora con las uvas rojas y verdes y sirve.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/cbfb4a2129666e1321dd4946f0744872.webp?itok=OSTJ8mFv",
      },
      {
        id: 17,
        name: "Pasta con Bacalao a la Vizcaína",
        description: "Una deliciosa pasta acompañada de bacalao a la vizcaína con una salsa rica de tomate.",
        ingredients: [
          "3 Jitomates",
          "1/2 Cebolla",
          "1/2 Diente de Ajo",
          "1 Taza de Puré de tomate",
          "1 Cubo de Concentrado de Tomate con Pollo",
          "1/2 Cucharadita de Sal con ajo en polvo",
          "2 Hojas de Laurel secas",
          "1 Cucharadita de Orégano seco molido",
          "1 Paquete de Pasta tipo fusilli (200 g)",
          "2 Tazas de Bacalao a la vizcaína preparado",
          "2 Cucharadas de Perejil fresco desinfectado y picado finamente",
          "100 Gramos de Queso parmesano rallado",
        ],
        instructions:
          "Para la salsa, licúa los jitomates con la cebolla, el ajo, el puré de tomate, el Concentrado de Tomate con Pollo y la sal con ajo.\n" +
          "Calienta a fuego medio hasta que hierva ligeramente, añade las hojas de laurel y el orégano, cocina por 3 minutos más.\n" +
          "Agrega la pasta previamente cocida y mezcla suavemente con la salsa.\n" +
          "Sirve en un plato, coloca un poco del bacalao caliente y decora con el perejil y el queso parmesano.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/eba5b24ef0056209fce146a19b59ce8b.webp?itok=gDsmI7Cc", 
      },
      {
        id: 18,
        name: "Malteada de Mokachino con Malvaviscos",
        description: "Una deliciosa malteada de Mokachino decorada con renos de malvaviscos.",
        ingredients: [
          "4 Palitos medianos para brocheta",
          "4 Bombones blancos medianos",
          "1 Barra de chocolate blanco fundido (150 g)",
          "4 Pretzels cortados a la mitad",
          "Colorante vegetal negro para alimentos",
          "4 Dulces rojos redondos",
          "1 1/2 Tazas de hielo",
          "4 Bolas de Helado Pasión de Mokaccino",
          "1 Lata de Leche Evaporada CARNATION",
          "1 Taza de mini bombones",
          "1 Taza de crema batida",
          "Granillo navideño para decorar",
        ],
        instructions:
          "Para los renos, inserta un palito de brocheta al centro de un bombón, cúbrelo con el chocolate blanco y colócalo en una charola con papel encerado; deja enfriar.\n" +
          "Con un poco más de chocolate, pega 2 mitades de pretzel en la parte superior del bombón para simular los cuernos; deja secar.\n" +
          "Forma los ojos con el colorante, la nariz con los dulces y repite con el resto de los ingredientes.\n" +
          "Para la malteada, licúa el hielo, el Helado Pasión de Mokaccino, la Leche Evaporada CARNATION y ½ taza de bombones.\n" +
          "Sirve en vasos, decora con la crema batida, los mini bombones restantes, el granillo navideño y una brocheta de reno.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/a473afacc4792ac6c462fa31eb0ad8f2.webp?itok=lCoUeTY2", 
      },
      {
        id: 19,
        name: "Costillas de Cerdo en Salsa de Chabacano",
        description: "Costillas al horno con una deliciosa salsa agridulce de chabacano y chipotle.",
        ingredients: [
          "1/2 Taza de mermelada de chabacano",
          "1 Chile chipotle adobado",
          "1/4 De cucharadita de pimienta negra molida",
          "3 Cucharadas de Jugo MAGGI",
          "1/2 Taza de agua",
          "1/2 Cucharadita de sal con ajo en polvo",
          "1 Cucharada de mantequilla",
          "1 Cucharada de harina de trigo",
          "800 Gramos de costillas de cerdo troceadas",
        ],
        instructions:
          "Precalienta el horno a 180 °C.\n" +
          "Licúa la mermelada de chabacano con el chile chipotle, la pimienta, el Jugo MAGGI, el agua y la sal con ajo.\n" +
          "En una sartén, calienta la mantequilla, añade la harina y cocina moviendo constantemente hasta integrar.\n" +
          "Vierte la mezcla licuada en la sartén y cocina hasta que espese ligeramente. Deja enfriar.\n" +
          "Cubre las costillas con la salsa, cubre con plástico adherente y marina en refrigeración por 30 minutos.\n" +
          "En una charola con papel encerado, coloca las costillas y hornea por 30 minutos.\n" +
          "Voltea las costillas con unas pinzas y hornéalas por 20 minutos más.\n" +
          "Barniza las costillas con más salsa y hornea por 10 minutos adicionales.\n" +
          "Sirve caliente y disfruta.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/d0f2c7a09ef48e10da8404ce117ab181.webp?itok=s7cZ-ym2", 
      },
      {
        id: 20,
        name: "Camarones a la Diabla",
        description: "Un platillo picante y delicioso con camarones en una intensa salsa de chiles.",
        ingredients: [
          "2 Cucharadas Aceite de maíz",
          "1/2 Pieza Cebolla cortada en cubos grandes",
          "2 Piezas Ajo",
          "1/4 Taza Agua",
          "5 Piezas Chile guajillo sin semillas y remojados en agua caliente",
          "7 Piezas Chile morita sin semillas y remojados en agua caliente",
          "4 Piezas Chile de árbol seco sin semillas y remojados en agua caliente",
          "1/4 Cucharadita Pimienta negra molida",
          "1 Cubo Concentrado de Tomate con Pollo",
          "1/2 Cucharadita Sal con ajo en polvo",
          "600 Gramos Camarón mediano, limpios",
          "3 Cucharadas Aceite de maíz",
        ],
        instructions:
          "Para la salsa, calienta 2 cucharadas de aceite y fríe la cebolla hasta que cambie de color. Añade el ajo y cocina por 1 minuto más.\n" +
          "Licúa la mezcla anterior con el agua, los chiles, la pimienta, el cubo de Concentrado de Tomate con Pollo y la sal con ajo. Cuela y reserva.\n" +
          "Cubre los camarones con la salsa y marina por 1 hora en refrigeración.\n" +
          "Calienta las 3 cucharadas de aceite restante y fríe los camarones junto con un poco de la salsa hasta que cambien de color.\n" +
          "Sirve caliente y acompaña con arroz blanco o tortillas.",
        image: "https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/b83a9bd0b6c47ece0db2526eedd9c457.webp?itok=kgWj5Kia", 
      },
  ];
  
  // Función para obtener la lista de recetas
  export async function fetchRecipes() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockRecipes), 500); // Simula una llamada a la API con 500ms de retraso
    });
  }
  
  // Función para obtener los detalles de una receta por ID
  export async function fetchRecipeDetails(id) {
    return new Promise((resolve) => {
      const recipe = mockRecipes.find((r) => r.id === id);
      setTimeout(() => resolve(recipe), 500); // Simula una llamada a la API con 500ms de retraso
    });
  }
  