"use client";

import ConfigModal from "@/components/admin/widgets/ConfigModal";
import DashboardNavbar from "@/components/admin/widgets/DashboardNavbar";
import { Slide } from "@/components/admin/widgets/Slide";
import Modal from "@/components/common/Modal";
import { useState } from "react";

type ModalView = 'none' | 'config';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [modalView, setModalView] = useState<ModalView>('none');

    const [openSidenav, setOpenSidenav] = useState(false);

    const openConfigModal = () => {
        setModalView('config');
    };

    const closeModal = () => {
        setModalView('none');
    };

    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Slide active={openSidenav} />

            <Modal
                isOpen={modalView == 'config'}
                onClose={closeModal}
                title={`Configuraciones`}
                size={`lg`}
            >
                <ConfigModal />
            </Modal>

            <div className={`p-4 duration-200 ${openSidenav ? `xl:ml-80` : ``}`}>
                <DashboardNavbar openModal={openConfigModal} openOrClose={() => setOpenSidenav(!openSidenav)} />
                {children}
            </div>

        </div>
    );
}
