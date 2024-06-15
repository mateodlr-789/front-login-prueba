import Form from "./_components/form/form";
import { Layout } from "./_components/layout";

export default function NewAppli({ params }: { params: { id: string } }) {
  const id = parseInt(params.id) ?? 0;

  return (
    <Layout>
      <Layout.Header>
        <p className="text-black">Crear nueva solicitud</p>
      </Layout.Header>

      <Layout.Form>
        <Form id={id} />
      </Layout.Form>
    </Layout>
  );
}
