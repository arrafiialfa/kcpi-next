import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";

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
                route: "/tentang-knowledge-centre",
                icon: UserCircleIcon,
            },
            {
                label: "Amanat Perubahan Iklim",
                route: "/amanat-pi",
                icon: CodeBracketSquareIcon,
            }
        ]
    },
    {
        label: "Info Iklim",
        children: [
            {
                route: "/mengenai-pi",
                label: "Mengenai Perubahan Iklim",
            },
            {
                route: "/dampak-dan-fenomena",
                label: "Dampak dan Fenomena",
            }
        ]
    },
    {
        label: "Aksi",
        children: [
            {
                route: "/mitigasi",
                label: "Mitigasi",
            },
            {
                route: "/adaptasi",
                label: "Adaptasi",
            },
            {
                route: "/redd",
                label: "REDD+"
            },
            {
                route: "/proklim",
                label: "PROKLIM"
            }
        ]
    },
    {
        label: "Sumber Daya",
        children: [
            {
                route: "/sumber-dana",
                label: "Sumber Dana"
            },
            {
                route: "/peningkatan-dan-kapasitas",
                label: "Peningkatan dan Kapasitas"
            },
            {
                route: "/teknologi",
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
