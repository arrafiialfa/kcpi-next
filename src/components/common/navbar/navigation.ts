
export type Route = {
    label: string,
    route?: string,
    icon?: any,
    children?: Route[]
}

export const routes: Route[] = [
    {
        label: "Tentang",
        children: [
            {
                label: "Knowledge Centre",
                route: "/tentang/tentang-knowledge-centre",
            },
            {
                label: "Amanat Perubahan Iklim",
                route: "/tentang/amanat-pi",
            }
        ]
    },
    {
        label: "Info Iklim",
        children: [
            {
                route: "/info-iklim/mengenai-pi",
                label: "Mengenai Perubahan Iklim",
            },
            {
                route: "/info-iklim/dampak-dan-fenomena",
                label: "Dampak dan Fenomena",
            }
        ]
    },
    {
        label: "Aksi",
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
            }
        ]
    },
    {
        label: "Sumber Daya",
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
    }

]
