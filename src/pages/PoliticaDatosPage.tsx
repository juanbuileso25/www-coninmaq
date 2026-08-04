import SEO from "../components/SEO";
import { ORGANIZATION_LD } from "../seo/config";

const sections = [
  {
    id: "identificacion",
    title: "1. Identificación del responsable",
    content: (
      <>
        <p>
          <strong>Construcciones Inversiones y Maquinaria S.A.S.</strong>, identificada con NIT{" "}
          <strong>901.273.442-1</strong> y conocida comercialmente como <strong>CONINMAQ S.A.S.</strong>, actúa como
          responsable del tratamiento de los datos personales recolectados en desarrollo de sus actividades.
        </p>
        <p className="mt-3">Los datos de contacto del responsable son:</p>
        <ul>
          <li>Domicilio: Girardota, Antioquia.</li>
          <li>Teléfono: 316 381 5694.</li>
          <li>
            Correo electrónico para asuntos de protección de datos:{" "}
            <a href="mailto:comercial@coninmaqsas.com" className="text-brand-accent hover:underline">
              comercial@coninmaqsas.com
            </a>
          </li>
          <li>Página web: www.coninmaqsas.com.</li>
        </ul>
      </>
    ),
  },
  {
    id: "objeto",
    title: "2. Objeto",
    content: (
      <>
        <p>
          La presente política establece las reglas aplicables a la recolección, almacenamiento, consulta, uso,
          circulación, actualización, transmisión, transferencia, conservación y supresión de los datos personales
          tratados por <strong>CONINMAQ S.A.S.</strong>
        </p>
        <p className="mt-3">
          Su finalidad es proteger los derechos de los titulares, garantizar el cumplimiento de la normativa colombiana
          y establecer condiciones claras para el uso de sistemas de videovigilancia en instalaciones, lugares de
          trabajo, vehículos y maquinaria.
        </p>
      </>
    ),
  },
  {
    id: "alcance",
    title: "3. Alcance",
    content: (
      <>
        <p>
          Esta política aplica a todas las bases de datos y archivos físicos, electrónicos, audiovisuales o
          automatizados que contengan datos personales y respecto de los cuales <strong>CONINMAQ S.A.S.</strong> actúe
          como responsable o encargado del tratamiento.
        </p>
        <p className="mt-3">Comprende información de:</p>
        <ul>
          <li>Clientes y clientes potenciales.</li>
          <li>Proveedores.</li>
          <li>Contratistas y subcontratistas.</li>
          <li>Aliados estratégicos.</li>
          <li>Trabajadores y extrabajadores.</li>
          <li>Aspirantes a procesos de selección.</li>
          <li>Visitantes.</li>
          <li>Representantes legales, trabajadores y personas de contacto de otras empresas.</li>
          <li>Conductores, operadores, técnicos y demás personas que utilicen vehículos o maquinaria dotados con cámaras.</li>
          <li>Personas que sean captadas incidentalmente por sistemas de videovigilancia.</li>
        </ul>
        <p className="mt-3">
          Los datos correspondientes exclusivamente a personas jurídicas, como su razón social o NIT, no constituyen
          por sí solos datos personales. Sin embargo, esta política sí protege la información de las personas naturales
          vinculadas con aquellas, como representantes legales, empleados, contactos, conductores u operadores.
        </p>
      </>
    ),
  },
  {
    id: "marco-normativo",
    title: "4. Marco normativo",
    content: (
      <>
        <p>Esta política se fundamenta principalmente en:</p>
        <ul>
          <li>El artículo 15 de la Constitución Política de Colombia.</li>
          <li>La Ley Estatutaria 1581 de 2012.</li>
          <li>El Decreto 1074 de 2015, especialmente su capítulo relativo a la protección de datos personales.</li>
          <li>La Ley 1266 de 2008, cuando se trate información financiera, crediticia, comercial o de servicios sometida a dicho régimen especial.</li>
          <li>La Ley 2300 de 2023, respecto de comunicaciones comerciales, publicitarias y gestiones de cobranza.</li>
          <li>Las instrucciones y guías expedidas por la Superintendencia de Industria y Comercio.</li>
          <li>Las demás normas que modifiquen, adicionen o sustituyan las anteriores.</li>
        </ul>
      </>
    ),
  },
  {
    id: "definiciones",
    title: "5. Definiciones",
    content: (
      <dl className="space-y-3">
        {[
          ["Autorización", "Consentimiento previo, expreso e informado otorgado por el titular para el tratamiento de sus datos personales."],
          ["Aviso de privacidad", "Comunicación mediante la cual se informa al titular sobre la existencia de esta política, el tratamiento de sus datos, sus finalidades y la forma de ejercer sus derechos."],
          ["Base de datos", "Conjunto organizado de datos personales sometidos a tratamiento."],
          ["Dato personal", "Información vinculada o que pueda asociarse con una persona natural determinada o determinable."],
          ["Dato sensible", "Información que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación, como datos de salud, biométricos, orientación política, convicciones religiosas, pertenencia sindical o información sobre la vida sexual."],
          ["Encargado del tratamiento", "Persona natural o jurídica que realiza el tratamiento por cuenta de CONINMAQ S.A.S."],
          ["Responsable del tratamiento", "Persona natural o jurídica que decide sobre las bases de datos y las finalidades del tratamiento."],
          ["Titular", "Persona natural cuyos datos personales son objeto de tratamiento."],
          ["Tratamiento", "Cualquier operación realizada sobre datos personales, como la recolección, grabación, almacenamiento, consulta, uso, circulación, transmisión, transferencia, conservación o supresión."],
          ["Videovigilancia", "Captación, visualización, transmisión, grabación, almacenamiento o reproducción de imágenes mediante cámaras fijas o móviles."],
        ].map(([term, def]) => (
          <div key={term}>
            <dt className="font-semibold text-zinc-800">{term}:</dt>
            <dd className="text-zinc-500 mt-0.5">{def}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    id: "principios",
    title: "6. Principios aplicables",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> realizará el tratamiento conforme a los principios de legalidad, finalidad,
          libertad, transparencia, veracidad, acceso y circulación restringida, seguridad, confidencialidad, necesidad,
          proporcionalidad y temporalidad.
        </p>
        <p className="mt-3">
          Los datos serán recolectados únicamente cuando sean adecuados, pertinentes y necesarios para las finalidades
          informadas. No serán utilizados para propósitos incompatibles con aquellos que justificaron su recolección.
        </p>
      </>
    ),
  },
  {
    id: "datos-tratados",
    title: "7. Datos personales tratados",
    content: (
      <>
        <p>Dependiendo de la relación con el titular, CONINMAQ S.A.S. podrá tratar:</p>
        <ul>
          <li>Nombres y apellidos.</li>
          <li>Tipo y número de identificación.</li>
          <li>Firma.</li>
          <li>Dirección y ciudad de residencia.</li>
          <li>País.</li>
          <li>Número telefónico.</li>
          <li>Correo electrónico.</li>
          <li>Cargo y empresa a la que pertenece.</li>
          <li>Información tributaria, contable y bancaria.</li>
          <li>Información sobre cotizaciones, compras, ventas, pagos, garantías y obligaciones.</li>
          <li>Información contractual y comercial.</li>
          <li>Información académica, profesional y laboral.</li>
          <li>Hoja de vida y referencias.</li>
          <li>Información salarial, de seguridad social y de nómina.</li>
          <li>Información necesaria para seguridad y salud en el trabajo.</li>
          <li>Datos relacionados con procesos administrativos, laborales o disciplinarios.</li>
          <li>Registros de acceso y visita.</li>
          <li>Imágenes y demás datos asociados a sistemas de videovigilancia.</li>
          <li>Fecha, hora, lugar y equipo desde el cual se produjo una videograbación.</li>
          <li>Imágenes de placas de vehículos, maquinaria, mercancías, herramientas y demás elementos relacionados con la operación.</li>
        </ul>
        <p className="mt-3">
          <strong>CONINMAQ S.A.S.</strong> no recolectará datos que no resulten necesarios para la relación existente
          con el titular.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "8. Finalidades generales del tratamiento",
    content: (
      <>
        <p>Los datos personales podrán ser utilizados para:</p>
        <ol>
          <li>Gestionar relaciones comerciales con clientes, proveedores, contratistas y aliados estratégicos.</li>
          <li>Elaborar y gestionar cotizaciones, pedidos, órdenes de compra, facturas, remisiones, contratos, garantías y demás documentos comerciales.</li>
          <li>Realizar procesos de venta, alquiler, entrega, posventa, mantenimiento, reparación, garantía, soporte técnico y servicio al cliente.</li>
          <li>Validar la identidad, representación, capacidad y legitimidad de clientes, proveedores, contratistas y demás personas relacionadas con una operación.</li>
          <li>Prevenir fraudes, suplantaciones de identidad y operaciones irregulares.</li>
          <li>Gestionar la entrega, recepción, traslado, custodia y devolución de maquinaria, vehículos, equipos, repuestos, herramientas y mercancías.</li>
          <li>Ejecutar procesos administrativos, contables, tributarios, financieros, de tesorería, cartera, cobranza y auditoría.</li>
          <li>Verificar pagos, saldos, obligaciones y antecedentes comerciales permitidos por la ley.</li>
          <li>Cumplir obligaciones legales, contractuales, tributarias, laborales, contables, judiciales y administrativas.</li>
          <li>Atender peticiones, consultas, quejas, reclamos, garantías y solicitudes de autoridades.</li>
          <li>Gestionar procesos de selección, contratación, vinculación, capacitación y administración del talento humano.</li>
          <li>Realizar afiliaciones, pagos, reportes y trámites ante entidades de seguridad social, autoridades laborales y administradoras de riesgos laborales.</li>
          <li>Gestionar la seguridad y salud en el trabajo, investigar accidentes e incidentes y adoptar medidas preventivas.</li>
          <li>Adelantar investigaciones internas y procedimientos laborales o disciplinarios, con respeto por el debido proceso y el derecho de defensa.</li>
          <li>Proteger los derechos e intereses de CONINMAQ S.A.S. en actuaciones administrativas, judiciales, arbitrales, extrajudiciales o de seguros.</li>
          <li>Mantener comunicación con el titular respecto de la relación contractual, comercial o laboral.</li>
          <li>Enviar información comercial, publicitaria, promocional o relacionada con productos, servicios, eventos y campañas, únicamente cuando exista autorización y respetando los canales, horarios y mecanismos de exclusión establecidos por la ley.</li>
        </ol>
        <p className="mt-3">
          La autorización para recibir publicidad no será condición para adquirir bienes o servicios. El titular podrá
          solicitar en cualquier momento que se suspendan las comunicaciones comerciales, sin que esto afecte los
          mensajes necesarios para ejecutar contratos, atender garantías, informar sobre pedidos o cumplir obligaciones
          legales.
        </p>
      </>
    ),
  },
  {
    id: "videovigilancia",
    title: "9. Tratamiento de imágenes y videograbaciones",
    subsections: [
      {
        id: "sistemas",
        subtitle: "9.1. Sistemas comprendidos",
        content: (
          <>
            <p>
              <strong>CONINMAQ S.A.S.</strong> podrá utilizar sistemas de videovigilancia mediante:
            </p>
            <ul>
              <li>Cámaras instaladas en oficinas, bodegas, talleres, patios, zonas de parqueo, accesos y demás lugares de trabajo.</li>
              <li>Cámaras incorporadas en vehículos.</li>
              <li>Cámaras frontales, posteriores, laterales o internas de vehículos.</li>
              <li>Cámaras instaladas en maquinaria, equipos y herramientas.</li>
              <li>Cámaras utilizadas para apoyar maniobras, desplazamientos, cargue, descargue, operación, mantenimiento o seguridad.</li>
              <li>Sistemas que permitan visualización en tiempo real, transmisión remota o almacenamiento posterior.</li>
            </ul>
            <p className="mt-3">
              La captación o transmisión de imágenes constituye tratamiento de datos personales cuando permite
              identificar, directa o indirectamente, a una persona, incluso si el sistema no conserva permanentemente
              la grabación.
            </p>
            <p className="mt-3">
              Las imágenes no se considerarán automáticamente datos biométricos sensibles. Tendrán esta naturaleza
              cuando sean sometidas a procedimientos técnicos dirigidos a identificar de manera única a una persona,
              como reconocimiento facial o análisis biométrico.
            </p>
            <p className="mt-3">
              <strong>CONINMAQ S.A.S.</strong> no implementará reconocimiento facial u otros mecanismos de
              identificación biométrica mediante cámaras sin realizar previamente una evaluación jurídica y de riesgos,
              establecer una finalidad específica y obtener la autorización explícita requerida.
            </p>
          </>
        ),
      },
      {
        id: "finalidades-video",
        subtitle: "9.2. Finalidades de la videovigilancia",
        content: (
          <>
            <p>Las imágenes podrán ser tratadas para:</p>
            <ol>
              <li>Proteger la vida, integridad y seguridad de trabajadores, contratistas, clientes, visitantes, operadores y terceros.</li>
              <li>Proteger instalaciones, vehículos, maquinaria, mercancías, repuestos, herramientas, documentos y demás activos.</li>
              <li>Prevenir, detectar e investigar hurtos, fraudes, daños, accesos no autorizados, actos de vandalismo y demás incidentes de seguridad.</li>
              <li>Controlar el ingreso, permanencia y salida de personas, vehículos, maquinaria y mercancías.</li>
              <li>Verificar el cumplimiento de protocolos de seguridad, operación, mantenimiento y seguridad y salud en el trabajo.</li>
              <li>Apoyar la prevención e investigación de accidentes de tránsito, accidentes laborales, incidentes operativos y daños a bienes.</li>
              <li>Reconstruir las circunstancias de un accidente, colisión, maniobra, entrega, recepción, operación o desplazamiento.</li>
              <li>Verificar la adecuada utilización y custodia de vehículos, maquinaria, equipos y herramientas de propiedad, tenencia o administración de CONINMAQ S.A.S.</li>
              <li>Atender reclamaciones de clientes, trabajadores, aseguradoras, proveedores o terceros.</li>
              <li>Aportar elementos materiales probatorios o evidencia en investigaciones internas y procedimientos disciplinarios, siempre con respeto por el debido proceso.</li>
              <li>Ejercer o defender derechos de CONINMAQ S.A.S. en actuaciones judiciales, administrativas, laborales, contractuales, extrajudiciales o de seguros.</li>
              <li>Atender solicitudes de autoridades judiciales, administrativas o de policía.</li>
            </ol>
            <p className="mt-3">
              Las cámaras no serán utilizadas para realizar vigilancia indiscriminada, permanente o desproporcionada de
              la vida privada de los trabajadores ni para finalidades diferentes de las informadas.
            </p>
          </>
        ),
      },
      {
        id: "lugares-trabajo",
        subtitle: "9.3. Cámaras en lugares de trabajo",
        content: (
          <>
            <p>
              Las cámaras podrán instalarse únicamente en espacios en los que exista una necesidad razonable de
              seguridad, control de acceso, protección de activos, supervisión operativa o prevención de accidentes.
            </p>
            <p className="mt-3">
              No se instalarán cámaras en baños, vestidores, zonas destinadas al cambio de ropa, salas de lactancia,
              espacios de descanso con expectativa razonable de privacidad ni en lugares en los que la grabación pueda
              afectar injustificadamente la intimidad o dignidad de las personas.
            </p>
            <p className="mt-3">
              La orientación y alcance de las cámaras deberán limitarse al área necesaria. Se evitará captar inmuebles
              vecinos, espacios privados o zonas públicas que no resulten indispensables para la finalidad perseguida.
            </p>
          </>
        ),
      },
      {
        id: "vehiculos",
        subtitle: "9.4. Cámaras en vehículos y maquinaria",
        content: (
          <>
            <p>
              Los vehículos y la maquinaria dotados con cámaras podrán captar imágenes del entorno, vías, áreas de
              operación, carga, cabina, conductor, operador, acompañantes o terceros, según la ubicación y función del
              dispositivo.
            </p>
            <p className="mt-3">
              <strong>CONINMAQ S.A.S.</strong> informará previamente a los conductores, operadores y demás trabajadores
              sobre:
            </p>
            <ul>
              <li>La existencia y ubicación general de las cámaras.</li>
              <li>Si las imágenes son grabadas o solamente visualizadas.</li>
              <li>Las finalidades del tratamiento.</li>
              <li>El tiempo general de conservación.</li>
              <li>Las personas autorizadas para acceder.</li>
              <li>Los canales para ejercer sus derechos.</li>
            </ul>
            <p className="mt-3">
              Las cámaras orientadas hacia la cabina o el puesto del operador únicamente se utilizarán cuando sean
              necesarias para la seguridad, prevención de accidentes, investigación de incidentes o protección de
              personas y activos.
            </p>
            <p className="mt-3">
              Cuando la maquinaria o el vehículo sea entregado en alquiler, comodato, operación o administración de un
              tercero, el contrato deberá definir quién actúa como responsable o encargado del tratamiento, quién puede
              acceder a las imágenes y qué obligaciones de información, seguridad y confidencialidad debe cumplir cada
              parte.
            </p>
          </>
        ),
      },
      {
        id: "audio",
        subtitle: "9.5. Grabación de audio",
        content: (
          <>
            <p>
              Como regla general, los sistemas de videovigilancia no grabarán audio. La grabación de conversaciones
              representa una mayor afectación de la intimidad. Solamente podrá activarse cuando exista una necesidad
              específica, legítima y proporcional, se haya informado expresamente a los titulares y se cumplan los
              requisitos legales de autorización y seguridad.
            </p>
          </>
        ),
      },
      {
        id: "avisos",
        subtitle: "9.6. Avisos y autorización",
        content: (
          <>
            <p>
              <strong>CONINMAQ S.A.S.</strong> instalará avisos visibles en los accesos y zonas sometidas a
              videovigilancia. También implementará avisos o distintivos en vehículos y maquinaria cuando resulte
              materialmente posible.
            </p>
            <p className="mt-3">
              Los trabajadores, conductores, operadores y contratistas que utilicen vehículos o maquinaria con cámaras
              recibirán información individual y verificable sobre el tratamiento.
            </p>
            <p className="mt-3">
              Los avisos de videovigilancia no sustituyen la obligación de conservar prueba de la autorización cuando
              esta sea legalmente exigible.
            </p>
          </>
        ),
      },
      {
        id: "conservacion",
        subtitle: "9.7. Conservación de las grabaciones",
        content: (
          <>
            <p>
              Las grabaciones se conservarán, como regla general, por un término máximo de{" "}
              <strong>treinta días calendario</strong> desde su captación. Cumplido este plazo serán eliminadas,
              sobrescritas o anonimizadas de forma segura.
            </p>
            <p className="mt-3">Podrán conservarse por un término superior cuando:</p>
            <ul>
              <li>Contengan información relacionada con un accidente, incidente o reclamación.</li>
              <li>Sean necesarias para una investigación interna.</li>
              <li>Deban aportarse a una aseguradora.</li>
              <li>Exista una solicitud de autoridad competente.</li>
              <li>Sean necesarias para ejercer o defender un derecho.</li>
              <li>Exista un deber legal o contractual de conservación.</li>
            </ul>
            <p className="mt-3">
              En estos casos se extraerá únicamente el segmento pertinente y se conservará de forma restringida durante
              el tiempo necesario para la respectiva actuación, reclamación o término legal.
            </p>
          </>
        ),
      },
      {
        id: "acceso-grabaciones",
        subtitle: "9.8. Acceso a las grabaciones",
        content: (
          <>
            <p>
              El acceso estará limitado al personal expresamente autorizado y a los proveedores que presten servicios de
              seguridad o almacenamiento bajo obligaciones de confidencialidad. Toda consulta, descarga, copia o entrega
              deberá quedar registrada cuando sea técnica y razonablemente posible.
            </p>
            <p className="mt-3">Las imágenes podrán ser suministradas a:</p>
            <ul>
              <li>El titular, cuando sea jurídicamente procedente.</li>
              <li>Autoridades judiciales, administrativas o de policía.</li>
              <li>Aseguradoras, ajustadores e investigadores de accidentes.</li>
              <li>Asesores jurídicos y técnicos.</li>
              <li>Terceros autorizados por el titular o por la ley.</li>
            </ul>
            <p className="mt-3">
              El derecho de acceso del titular no implica necesariamente la entrega de una copia íntegra cuando
              aparezcan otras personas. <strong>CONINMAQ S.A.S.</strong> podrá permitir una visualización controlada,
              suministrar imágenes editadas, difuminar a terceros, entregar capturas parciales o emitir una respuesta
              descriptiva, según la naturaleza del caso y los derechos de las demás personas captadas.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "datos-sensibles",
    title: "10. Datos sensibles",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> tratará datos sensibles únicamente cuando sean estrictamente necesarios y
          exista autorización explícita o una excepción legal.
        </p>
        <p className="mt-3">
          El titular será informado de que no está obligado a autorizar el tratamiento de datos sensibles, salvo cuando
          sean indispensables para cumplir una obligación legal, laboral, de seguridad social, seguridad y salud en el
          trabajo o para salvaguardar un interés vital.
        </p>
        <p className="mt-3">
          El acceso a estos datos será restringido y se adoptarán medidas reforzadas de seguridad.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "11. Datos de niños, niñas y adolescentes",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> no dirige ordinariamente sus actividades a menores de edad. Cuando una
          persona menor de edad sea captada incidentalmente por un sistema de videovigilancia, las imágenes serán
          tratadas únicamente para las finalidades de seguridad informadas, con acceso restringido y sin divulgación
          pública.
        </p>
        <p className="mt-3">
          Cualquier otro tratamiento deberá respetar el interés superior del menor, sus derechos fundamentales y las
          reglas de autorización mediante sus representantes legales.
        </p>
      </>
    ),
  },
  {
    id: "autorizacion",
    title: "12. Autorización",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> solicitará autorización previa, expresa e informada, salvo en los casos
          exceptuados por la ley.
        </p>
        <p className="mt-3">
          La autorización podrá obtenerse por escrito, verbalmente, por medios electrónicos o mediante conductas
          inequívocas que permitan demostrar razonablemente la voluntad del titular. El silencio no se entenderá como
          autorización.
        </p>
        <p className="mt-3">
          La empresa conservará prueba de las autorizaciones y de la información suministrada al titular.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "13. Derechos de los titulares",
    content: (
      <>
        <p>Los titulares podrán:</p>
        <ol>
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar prueba de la autorización, salvo cuando legalmente no sea necesaria.</li>
          <li>Ser informados sobre el uso dado a sus datos.</li>
          <li>Acceder gratuitamente a sus datos personales.</li>
          <li>Solicitar la supresión de los datos o revocar la autorización cuando resulte procedente.</li>
          <li>Presentar consultas y reclamos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio, después de agotar el trámite ante CONINMAQ S.A.S.</li>
          <li>Abstenerse de responder preguntas sobre datos sensibles o datos de niños, niñas y adolescentes, salvo cuando su tratamiento sea legalmente indispensable.</li>
        </ol>
        <p className="mt-3">
          La supresión o revocatoria no procederá cuando exista un deber legal o contractual de conservar la
          información.
        </p>
      </>
    ),
  },
  {
    id: "area-responsable",
    title: "14. Área responsable",
    content: (
      <>
        <p>
          El área Administrativa y Comercial de <strong>CONINMAQ S.A.S.</strong> será responsable de recibir y
          tramitar las peticiones, consultas y reclamos relacionados con datos personales.
        </p>
        <div className="mt-4 bg-zinc-50 border border-zinc-200 p-5 rounded">
          <p className="font-semibold text-zinc-800 mb-1">Las solicitudes podrán enviarse a:</p>
          <p>
            <span className="font-medium">Correo:</span>{" "}
            <a href="mailto:comercial@coninmaqsas.com" className="text-brand-accent hover:underline">
              comercial@coninmaqsas.com
            </a>
          </p>
          <p>
            <span className="font-medium">Asunto:</span> Protección de datos personales
          </p>
          <p>
            <span className="font-medium">Teléfono:</span> 316 381 5694
          </p>
        </div>
      </>
    ),
  },
  {
    id: "consultas",
    title: "15. Procedimiento para consultas",
    content: (
      <>
        <p>La solicitud deberá contener:</p>
        <ul>
          <li>Nombre e identificación del titular.</li>
          <li>Datos de contacto.</li>
          <li>Descripción clara de la información consultada.</li>
          <li>Documentos que acrediten representación, cuando corresponda.</li>
          <li>Los datos necesarios para localizar la información.</li>
        </ul>
        <p className="mt-3">
          Cuando se solicite información de videovigilancia deberá indicarse, en lo posible, la fecha, franja horaria,
          lugar, vehículo, maquinaria o circunstancias de la grabación.
        </p>
        <p className="mt-3">
          Las consultas serán atendidas dentro de los <strong>diez días hábiles</strong> siguientes a su recepción.
          Cuando no sea posible responder dentro de este término, se informarán los motivos de la demora y la nueva
          fecha de respuesta, que no podrá superar los cinco días hábiles siguientes.
        </p>
      </>
    ),
  },
  {
    id: "reclamos",
    title: "16. Procedimiento para reclamos",
    content: (
      <>
        <p>
          Los reclamos de corrección, actualización, supresión, revocatoria o presunto incumplimiento deberán contener:
        </p>
        <ul>
          <li>Identificación del titular.</li>
          <li>Descripción de los hechos.</li>
          <li>Dirección o correo para recibir respuesta.</li>
          <li>Documentos que se pretendan hacer valer.</li>
          <li>Petición concreta.</li>
        </ul>
        <p className="mt-3">
          Si el reclamo está incompleto, <strong>CONINMAQ S.A.S.</strong> requerirá su subsanación dentro de los cinco
          días siguientes. Si transcurren dos meses sin que se complete, se entenderá desistido.
        </p>
        <p className="mt-3">
          El reclamo completo será atendido dentro de los <strong>quince días hábiles</strong> siguientes al día de su
          recepción. Cuando no sea posible resolverlo dentro de ese plazo, se informarán los motivos y la nueva fecha,
          que no podrá exceder ocho días hábiles adicionales.
        </p>
        <p className="mt-3">
          Cuando <strong>CONINMAQ S.A.S.</strong> no sea competente para resolverlo, trasladará la solicitud a quien
          corresponda dentro de los dos días hábiles siguientes e informará al interesado.
        </p>
      </>
    ),
  },
  {
    id: "transmision",
    title: "17. Transmisión y transferencia de información",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> podrá transmitir datos a proveedores que presten servicios de:
        </p>
        <ul>
          <li>Seguridad y videovigilancia.</li>
          <li>Almacenamiento físico o electrónico.</li>
          <li>Servicios tecnológicos y alojamiento en la nube.</li>
          <li>Contabilidad, nómina y facturación.</li>
          <li>Transporte y logística.</li>
          <li>Garantía, mantenimiento y soporte.</li>
          <li>Gestión de cartera.</li>
          <li>Seguros.</li>
          <li>Asesoría jurídica, contable o técnica.</li>
        </ul>
        <p className="mt-3">
          Estos terceros solo podrán tratar la información conforme a las instrucciones de{" "}
          <strong>CONINMAQ S.A.S.</strong>, para las finalidades autorizadas y bajo obligaciones de seguridad y
          confidencialidad.
        </p>
        <p className="mt-3">
          Las transferencias o transmisiones internacionales se efectuarán respetando las reglas previstas en la
          legislación colombiana y mediante los contratos o mecanismos jurídicos correspondientes.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "18. Seguridad y confidencialidad",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> adoptará medidas técnicas, humanas y administrativas razonables para
          prevenir la pérdida, alteración, uso indebido, consulta, divulgación o acceso no autorizado a los datos.
        </p>
        <p className="mt-3">Entre las medidas aplicables se encuentran:</p>
        <ul>
          <li>Perfiles y restricciones de acceso.</li>
          <li>Contraseñas y autenticación.</li>
          <li>Copias de respaldo.</li>
          <li>Registros de acceso a grabaciones.</li>
          <li>Deberes contractuales de confidencialidad.</li>
          <li>Capacitación del personal.</li>
          <li>Custodia de archivos físicos.</li>
          <li>Eliminación y sobrescritura segura.</li>
          <li>Gestión de incidentes de seguridad.</li>
          <li>Contratos con los encargados del tratamiento.</li>
        </ul>
        <p className="mt-3">
          Cuando se presente un incidente que pueda generar riesgos para los titulares, se adoptarán medidas de
          contención, investigación, corrección y reporte a la autoridad, cuando corresponda.
        </p>
      </>
    ),
  },
  {
    id: "vigencia-bd",
    title: "19. Vigencia de las bases de datos",
    content: (
      <>
        <p>
          Las bases de datos comerciales, contractuales, contables, tributarias, laborales y de proveedores
          permanecerán vigentes durante la relación con el titular y por el tiempo adicional requerido para cumplir
          obligaciones legales, contractuales, contables, fiscales, laborales o para atender términos de prescripción.
        </p>
        <p className="mt-3">
          Las grabaciones se sujetarán al plazo especial de treinta días previsto en esta política, salvo que deban
          conservarse por un accidente, investigación, reclamación, orden de autoridad o defensa de derechos.
        </p>
        <p className="mt-3">
          Cumplida la finalidad y los períodos obligatorios de conservación, la información será eliminada,
          anonimizada o archivada bajo las condiciones legales correspondientes.
        </p>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "20. Modificaciones",
    content: (
      <>
        <p>
          <strong>CONINMAQ S.A.S.</strong> podrá modificar esta política por cambios legales, tecnológicos, operativos
          o de seguridad.
        </p>
        <p className="mt-3">
          Los cambios sustanciales relacionados con la identificación del responsable, las finalidades o los derechos de
          los titulares serán comunicados antes de su implementación mediante la página web, correo electrónico, avisos
          físicos u otro mecanismo eficiente.
        </p>
        <p className="mt-3">
          Cuando el cambio implique una nueva finalidad que requiera autorización, esta será solicitada antes de iniciar
          el tratamiento.
        </p>
      </>
    ),
  },
  {
    id: "vigencia",
    title: "21. Entrada en vigencia",
    content: (
      <>
        <p>
          La presente política rige a partir del <strong>21 de julio de 2026</strong> y reemplaza las versiones
          anteriores que regulen la misma materia.
        </p>
        <div className="mt-6 pt-6 border-t border-zinc-200">
          <p className="font-bold text-zinc-800">CONSTRUCCIONES INVERSIONES Y MAQUINARIA S.A.S.</p>
          <p className="text-zinc-600">NIT 901.273.442-1</p>
          <p className="font-semibold text-zinc-800 mt-2">Camilo Gómez Escobar</p>
          <p className="text-zinc-500">Representante Legal</p>
        </div>
      </>
    ),
  },
];

const policySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política de tratamiento y protección de datos personales — Coninmaq S.A.S.",
  url: "https://coninmaqsas.com/politica-privacidad",
  description:
    "Política de tratamiento y protección de datos personales de Construcciones Inversiones y Maquinaria S.A.S. (CONINMAQ S.A.S.), NIT 901.273.442-1. Vigente desde el 21 de julio de 2026.",
  mainEntity: {
    "@id": "https://coninmaqsas.com/#organization",
  },
};

export default function PoliticaDatosPage() {
  return (
    <>
      <SEO
        title="Política de Tratamiento y Protección de Datos Personales"
        description="Política de tratamiento y protección de datos personales de CONINMAQ S.A.S. (NIT 901.273.442-1). Conoce cómo recolectamos, usamos y protegemos tu información personal. Vigente desde el 21 de julio de 2026."
        keywords="política de privacidad Coninmaq, protección de datos personales, habeas data, videovigilancia, datos personales Colombia, Ley 1581 de 2012"
        path="/politica-privacidad"
        jsonLd={[ORGANIZATION_LD, policySchema]}
      />

      {/* Header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2">
            Coninmaq S.A.S. — NIT 901.273.442-1
          </span>
          <h1 className="font-black text-[26px] md:text-[42px] uppercase text-white leading-tight">
            Política de{" "}
            <span className="text-brand-accent">protección de datos</span>
          </h1>
          <p className="text-zinc-400 text-[14px] mt-3">
            Versión 1 &mdash; Vigente desde el 21 de julio de 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Index */}
        <nav className="mb-14 bg-zinc-50 border border-zinc-200 p-6 rounded">
          <p className="font-bold text-zinc-800 text-[13px] uppercase tracking-wider mb-4">Contenido</p>
          <ol className="columns-1 sm:columns-2 gap-x-8 [&>li]:break-inside-avoid [&>li]:mb-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[13px] text-zinc-500 hover:text-brand-accent transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <h2 className="font-black text-[18px] md:text-[22px] uppercase text-zinc-900 border-l-4 border-brand-accent pl-4 mb-5">
                {section.title}
              </h2>

              {"content" in section && (
                <div className="policy-content text-zinc-500 text-[15px] leading-relaxed">
                  {section.content}
                </div>
              )}

              {"subsections" in section && section.subsections && (
                <div className="space-y-8 mt-2">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className="scroll-mt-24 pl-4 border-l border-zinc-200">
                      <h3 className="font-bold text-[16px] text-zinc-700 mb-3">{sub.subtitle}</h3>
                      <div className="policy-content text-zinc-500 text-[15px] leading-relaxed">
                        {sub.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-zinc-900 p-8 text-center">
          <p className="text-zinc-400 text-[14px] mb-2 uppercase tracking-wider font-semibold">
            ¿Tienes preguntas sobre el uso de tus datos?
          </p>
          <p className="text-white font-black text-[22px] mb-4">
            Contáctanos directamente
          </p>
          <a
            href="mailto:comercial@coninmaqsas.com?subject=Protección%20de%20datos%20personales"
            className="inline-block bg-brand-accent text-zinc-900 font-bold text-[13px] uppercase tracking-wider px-7 py-3 hover:brightness-110 transition-all"
          >
            comercial@coninmaqsas.com
          </a>
        </div>
      </div>

      <style>{`
        .policy-content ul {
          list-style: none;
          margin-top: 0.5rem;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .policy-content ul li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .policy-content ul li::before {
          content: "▶";
          color: #FFC837;
          font-size: 9px;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .policy-content ol {
          list-style: none;
          counter-reset: policy-counter;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .policy-content ol li {
          counter-increment: policy-counter;
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
        }
        .policy-content ol li::before {
          content: counter(policy-counter) ".";
          color: #FFC837;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
          min-width: 1.25rem;
        }
      `}</style>
    </>
  );
}
