const EntourageSection = () => {
  return (
    <section id="entourage" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-script italic text-primary mb-4" data-testid="text-entourage-title">
            Entourage
          </h2>
        </div>

        <div className="animate-fade-up space-y-12">
          {/* Solemnizing Minister */}
          <div>
            <h3 className="text-lg font-script italic text-primary mb-3 text-center">Solemnizing Minister</h3>
            <p className="text-xs text-foreground text-center">CHRISTOPHER SABLAY</p>
          </div>

          {/* Best Man and Maid of Honor */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-script italic text-primary mb-3 text-center">Best Man</h3>
              <p className="text-xs text-foreground text-center">FERLAND NAVAL</p>
            </div>
            <div>
              <h3 className="text-lg font-script italic text-primary mb-3 text-center">Maid of Honor</h3>
              <p className="text-xs text-foreground text-center">MA. SHIELA MHICA HIANGAN</p>
            </div>
          </div>

          {/* Groomsmen and Bridesmaids */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-script italic text-primary mb-4 text-center">Groomsmen</h3>
              <div className="space-y-1 text-xs text-foreground text-center">
                <p>MIGUEL DESTURA</p>
                <p>RENZ JOHN NAVAL</p>
                <p>GABRIEL MANUEL PLACIDO</p>
                <p>HERNANDO NAVAL</p>
                <p>JOHN GERALD CRUZ</p>
                <p>KENJIE RYAN CRUZ</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-script italic text-primary mb-4 text-center">Bridesmaids</h3>
              <div className="space-y-1 text-xs text-foreground text-center">
                <p>ELIZA JOYCE TRESREYES</p>
                <p>HEZAEL HERRERA</p>
                <p>FLORISA CAPONES</p>
                <p>ANGELINE LIZARDO</p>
                <p>JINKY BEQUIO</p>
                <p>CLARISSE MOJICA</p>
              </div>
            </div>
          </div>

          {/* Principal Sponsors */}
          <div>
            <h3 className="text-3xl font-script italic text-primary mb-6 text-center" data-testid="text-principal-sponsors-title">
              Principal Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="space-y-1 text-[9px] text-foreground text-center">
                <p>MR. GREGORIO BATI</p>
                <p>MR. JAYSON CRUZ</p>
                <p>ASEC. JUABILLY RACHO</p>
                <p>GEN. MANUEL PLACIDO</p>
                <p>HON. NORMAN DUBLOIS</p>
                <p>MR. OBET GAJO</p>
                <p>MR. MICHAEL DESTURA</p>
                <p>MR. MARK FERDINAND ABIOG</p>
                <p>MR. RENE SUAREZ</p>
                <p>MR. JOSE ROJIE LUCER</p>
              </div>
              <div className="space-y-1 text-[9px] text-foreground text-center">
                <p>MS. ALPA OMEGA AQUINO</p>
                <p>MRS. MONICA CABALLES</p>
                <p>MRS. EVA OQUIALDA</p>
                <p>MRS. NANY DESTURA</p>
                <p>MRS. CHARITO PASQUARIELLO</p>
                <p>DRA. NORMA NUÑEZ</p>
                <p>MRS. LIEZLE DAYAO</p>
                <p>MRS. RAQUEL ERANDIO DE LUNA</p>
                <p>MRS. LUISITA SUAREZ</p>
                <p>MRS. CRISTINA MARASIGAN HUBALDE</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[9px] text-foreground">MRS. JOSEPHINE NAVAL PLACIDO</p>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div>
            <h3 className="text-3xl font-script italic text-primary mb-6 text-center" data-testid="text-secondary-sponsors-title">
              Secondary Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-6 text-xs text-foreground">
              <div className="text-center">
                <h4 className="font-semibold text-primary mb-2">Veil</h4>
                <p>MICHAEL NICKOLO CRUZ</p>
                <p>PAULINA SANCIANGCO</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-primary mb-2">Cord</h4>
                <p>MARK ANTHONY NAVAL</p>
                <p>JANNA FILIPINA NAVAL</p>
              </div>
            </div>
          </div>

          {/* Special Roles */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3 text-xs text-center">Coin Bearer</h4>
              <p className="text-xs text-foreground text-center">NUI MALCOLM LIM</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3 text-xs text-center">Bible Bearer</h4>
              <p className="text-xs text-foreground text-center">FILIPE SEBASTIAN DESTURA</p>
            </div>
          </div>

          {/* Ring Bearers */}
          <div>
            <div className="text-xs text-foreground text-center">
              <p>ENZO RAYS RIVERA</p>
              <p>MAIZELL RIY RAMIREZ</p>
              <p>MARCO RAFAEL NAVAL</p>
              <div className="my-4"></div>
              <div className="my-4"></div>
              <p className="font-semibold text-primary text-xs">ring bearer</p>
              <div className="my-4"></div>
              <p>PRINCE ZOOMER CRUZ</p>
            </div>
          </div>

          {/* Flower Girls */}
          <div>
            <h4 className="font-semibold text-primary mb-3 text-xs text-center">Flower Girls</h4>
            <div className="text-xs text-foreground text-center space-y-1">
              <p>PRINCESS ANDREA TABIOLO</p>
              <p>ZYN RAEVENN SANCIANGCO</p>
              <p>SOPHIA AMBER CRUZ</p>
              <p>ZHANAIAH EUNICE CRUZ</p>
              <p>KIESHIA JANE MEDIABELLO</p>
              <p>LHEE AMERYCK LIZARDO</p>
              <p>NIANA MIKAELA LIM</p>
            </div>
          </div>

          {/* Here Comes The Bride Banner */}
          <div>
            <h4 className="font-semibold text-primary mb-3 text-xs text-center">Here Comes The Bride Banner</h4>
            <p className="text-xs text-foreground text-center">MICHAEL ACE HIANGAN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntourageSection;
