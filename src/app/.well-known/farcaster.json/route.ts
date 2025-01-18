import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAibG92ZXRlZW52bi1wdXp6bGlvcXVlc3QudmVyY2VsLmFwcCJ9",
      signature: "MHgxMWZiNGJjNTkwN2E2M2ZlODI1OTlhODhkYjEwNTRiYzJjM2Q2MjQ3ZTkyMjE1YzVhNDgyZjJkYjllNDE3MmY3NjgyYjdhYjgyODEzMDIzMThlNzNhZmJiNWZlYzY0NWQ1MTdhYTVkYzk1NTAwZTVhYmZlMzZkZjJmNWE4NTc2YTFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
