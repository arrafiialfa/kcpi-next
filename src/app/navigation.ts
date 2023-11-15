
export type Route = {
    label: string,
    route?: string,
    icon?: any,
    children?: Route[]
}

export const routes: Route[] = [
    {
        label: "Tentang",
        route: "/tentang",
        children: [
            {
                label: "Knowledge Centre",
                route: "/tentang/tentang-knowledge-centre",
            },
            {
                label: "Amanat Perubahan Iklim",
                route: "/tentang/amanat-pi",
            },
            {
                label: "Konvensi",
                route: "/tentang/konvensi",
            },
            {
                label: "Komitmen Indonesia",
                route: "/tentang/komitmen-indonesia",
            }
        ]
    },
    {
        label: "Info Iklim",
        route: "/info-iklim",
        children: [
            {
                route: "/info-iklim/perubahan-iklim",
                label: "Mengenai Perubahan Iklim",
            },
            {
                route: "/info-iklim/dampak-dan-fenomena",
                label: "Dampak dan Fenomena",
            },
            {
                route: "/info-iklim/skenario-iklim",
                label: "Skenario Iklim"
            },
            {
                route: "/info-iklim/skenario-iklim-indonesia",
                label: "Skenario Iklim Indonesia"
            },
        ]
    },
    {
        label: "Aksi",
        route: "/aksi",
        children: [
            {
                route: "/aksi/mitigasi",
                label: "Mitigasi",
            },
            {
                route: "/aksi/adaptasi",
                label: "Adaptasi",
            },
            {
                route: "/aksi/redd",
                label: "REDD+"
            },
            {
                route: "/aksi/proklim",
                label: "PROKLIM"
            },
            {
                route: "/aksi/perjanian-paris",
                label: "Perjanjian Paris",
            },
            {
                route: "/aksi/karhutla",
                label: "Karhutla"
            },
            {
                route: "/aksi/srn",
                label: "SRN"
            }
        ]
    },
    {
        label: "Sumber Daya",
        route: "/sumber-daya",
        children: [
            {
                route: "/sumber-daya/sumber-dana",
                label: "Sumber Dana"
            },
            {
                route: "/sumber-daya/peningkatan-dan-kapasitas",
                label: "Peningkatan dan Kapasitas"
            },
            {
                route: "/sumber-daya/teknologi",
                label: "Teknologi"
            }
        ]
    },
    {
        route: "/inovasi",
        label: "Inovasi",
    },
    {
        route: "/hasil-kerjasama",
        label: "Hasil Kerjasama"
    },
    {
        route: "/profil-provinsi",
        label: "Profil Provinsi"
    },
    {
        route: "/kawal-karbon",
        label: "Kawal Karbon",
        children: [
            {
                route: "/kawal-karbon/infografis-ndc",
                label: "Infografis NDC"
            },
            {
                route: "/kawal-karbon/kamus-kawal-karbon",
                label: "Kamus Kawal karbon"
            }
        ]
    }

]


//todo handle multi nested routes