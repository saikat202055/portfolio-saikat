/* =========================================================
   CERTIFICATE TYPE
========================================================= */

export type CertificateItem = {
  id: string;
  title: string;
  category: string;
  pdfUrl: string;
};


/* =========================================================
   AUTO LOAD PDF FILES

   Folder:
   src/assets/certificates/

   Naming:
   01__Digital_Marketing_Expert__Digital_Marketing.pdf
========================================================= */

const certificateFiles = import.meta.glob(
  '../assets/certificates/*.pdf',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>;


/* =========================================================
   HELPERS
========================================================= */

function cleanText(value: string) {
  return decodeURIComponent(value)
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}


function createId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}


/* =========================================================
   AUTO CREATE CERTIFICATE DATA
========================================================= */

export const CERTIFICATES: CertificateItem[] =
  Object.entries(certificateFiles)
    .map(([path, pdfUrl]) => {
      const fileName =
        path.split('/').pop() ??
        'certificate.pdf';

      const nameWithoutExtension =
        fileName.replace(/\.pdf$/i, '');

      const parts =
        nameWithoutExtension.split('__');

      const hasOrderNumber =
        /^\d+$/.test(parts[0] ?? '');

      const order =
        hasOrderNumber
          ? Number(parts[0])
          : 9999;


      let titleSource =
        nameWithoutExtension;

      let categorySource =
        'Certificate';


      if (
        hasOrderNumber &&
        parts.length >= 2
      ) {
        titleSource =
          parts[1] ??
          nameWithoutExtension;

        categorySource =
          parts[2] ??
          'Certificate';
      } else if (
        parts.length >= 2
      ) {
        titleSource =
          parts[0];

        categorySource =
          parts[1] ??
          'Certificate';
      }


      const title =
        cleanText(titleSource);

      const category =
        cleanText(categorySource);


      return {
        id: `${order}-${createId(title)}`,
        title,
        category,
        pdfUrl,
        order,
      };
    })
    .sort(
      (a, b) =>
        a.order - b.order ||
        a.title.localeCompare(b.title),
    )
    .map(
      ({
        order: _order,
        ...certificate
      }) => certificate,
    );