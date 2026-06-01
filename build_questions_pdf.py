#!/usr/bin/env python3
"""Génère le PDF 'Questions pour l'expert-comptable' — vente du livre R.O.P."""
from fpdf import FPDF

GOLD = (184, 146, 74)
INK = (42, 38, 34)
GREY = (110, 102, 92)
LIGHT = (230, 221, 208)
SAGE_BG = (244, 241, 234)


class PDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*GREY)
        self.cell(0, 8, "Questions pour l'expert-comptable - Livre R.O.P.", align="L")
        self.cell(0, 8, "Institut R.O.P. - Guy Boitout", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*LIGHT)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(4)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*GREY)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")


def clean(s: str) -> str:
    repl = {
        "’": "'", "‘": "'", "“": '"', "”": '"',
        "–": "-", "—": "-", "…": "...", " ": " ",
        "→": ">", "✅": "[+]", "⚠": "[!]", "ℹ": "[i]",
        "❌": "[x]", "•": "-", "€": "EUR",
    }
    for k, v in repl.items():
        s = s.replace(k, v)
    return s.encode("latin-1", "replace").decode("latin-1")


pdf = PDF(orientation="P", unit="mm", format="A4")
pdf.set_auto_page_break(auto=True, margin=18)
pdf.set_margins(20, 18, 20)
pdf.add_page()
W = pdf.w - pdf.l_margin - pdf.r_margin


def h1(txt):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "B", 20)
    pdf.set_text_color(*INK)
    pdf.multi_cell(0, 9, clean(txt))
    pdf.ln(1)


def h2(txt):
    pdf.ln(3)
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "B", 12.5)
    pdf.set_text_color(*GOLD)
    pdf.multi_cell(0, 6.5, clean(txt))
    pdf.set_draw_color(*LIGHT)
    pdf.line(pdf.l_margin, pdf.get_y() + 0.5, pdf.l_margin + 28, pdf.get_y() + 0.5)
    pdf.ln(2.5)


def para(txt, gap=1.4, italic=False, grey=False):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "I" if italic else "", 10)
    pdf.set_text_color(*(GREY if grey else INK))
    pdf.multi_cell(0, 5.2, clean(txt))
    pdf.ln(gap)


def question(num, txt, why=None):
    pdf.set_x(pdf.l_margin)
    # Numero en pastille or
    y = pdf.get_y()
    pdf.set_fill_color(*GOLD)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(7, 6, str(num), align="C", fill=True)
    pdf.set_x(pdf.l_margin + 9)
    pdf.set_font("Helvetica", "B", 10.5)
    pdf.set_text_color(*INK)
    pdf.multi_cell(W - 9, 5.4, clean(txt))
    if why:
        pdf.set_x(pdf.l_margin + 9)
        pdf.set_font("Helvetica", "I", 8.8)
        pdf.set_text_color(*GREY)
        pdf.multi_cell(W - 9, 4.4, clean("Pourquoi : " + why))
    pdf.ln(2.4)


def eyebrow(txt):
    pdf.set_font("Helvetica", "B", 8.5)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 5, clean(txt.upper()), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.5)


# ----------------------------------------------------------- En-tete
pdf.ln(4)
eyebrow("Institut R.O.P.  -  Guy Boitout")
h1("Questions pour l'expert-comptable")
pdf.set_font("Helvetica", "", 11)
pdf.set_text_color(*GREY)
pdf.multi_cell(0, 5.6, clean("Vente du livre R.O.P. en ligne - preparation du rendez-vous"))
pdf.ln(3)

# Encadre contexte
pdf.set_fill_color(*SAGE_BG)
pdf.set_draw_color(*GOLD)
y0 = pdf.get_y()
pdf.set_line_width(0.5)
pdf.rect(pdf.l_margin, y0, W, 30, style="DF")
pdf.set_line_width(0.2)
pdf.set_xy(pdf.l_margin + 5, y0 + 3.5)
pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(*GOLD)
pdf.cell(0, 5, clean("CONTEXTE A PRESENTER AU COMPTABLE"), new_x="LMARGIN", new_y="NEXT")
pdf.set_x(pdf.l_margin + 5)
pdf.set_font("Helvetica", "", 9.3)
pdf.set_text_color(*INK)
pdf.multi_cell(W - 10, 4.6, clean(
    "Guy Boitout, retraite, sans autre revenu d'activite que la formation R.O.P. dispensee "
    "via son association (loi 1901, avec SIRET et compte bancaire). Projet : vendre son livre "
    "(papier et numerique) en ligne. Schema envisage : l'association vend le livre et verse a "
    "Guy un droit d'auteur sur chaque exemplaire (option D)."))
pdf.set_y(y0 + 34)

# ----------------------------------------------------------- 1. Plafond association
h2("1. Activite commerciale de l'association")
question(1, "A combien s'elevent aujourd'hui les revenus commerciaux de l'association, et la "
            "vente du livre risque-t-elle de depasser le plafond (~78 000 EUR/an) au-dela "
            "duquel l'association deviendrait imposable ?",
         "C'est le point bloquant n.1 : au-dela du seuil, l'association risque l'impot sur "
         "les societes, la TVA et la CFE.")
question(2, "Notre gestion est-elle bien consideree comme << desinteressee >>, condition de "
            "l'exoneration ? Le versement d'un droit d'auteur a Guy (membre/dirigeant ?) "
            "remet-il en cause ce caractere ?",
         "Un versement a un dirigeant peut, selon les cas, fragiliser le caractere non lucratif.")
question(3, "Faut-il << sectoriser >> l'activite de vente du livre (comptabilite distincte) "
            "pour proteger le reste de l'association si le seuil etait approche ?")

# ----------------------------------------------------------- 2. Droit d'auteur Guy
h2("2. Droit d'auteur verse a Guy (retraite)")
question(4, "Quel est le bon cadre pour verser ce droit d'auteur : contrat d'edition entre Guy "
            "et l'association ? Declaration via l'URSSAF artistes-auteurs ? Autre ?",
         "Determine les cotisations, la fiscalite et la paperasse cote Guy.")
question(5, "Comment fixer le montant : pourcentage du prix de vente ou montant fixe par "
            "exemplaire ? Y a-t-il un usage ou un plafond a respecter ?")
question(6, "Pour Guy retraite, ce droit d'auteur a-t-il un impact sur sa pension (regle de "
            "cumul) ou genere-t-il des cotisations sans nouveaux droits ?",
         "Objectif : confirmer que c'est bien le mode de remuneration le plus favorable.")
question(7, "Comment ce revenu doit-il etre declare a l'impot sur le revenu de Guy "
            "(traitements et salaires, BNC, regime special droits d'auteur) ?")

# ----------------------------------------------------------- 3. TVA
pdf.add_page()
h2("3. TVA sur le livre")
question(8, "Confirmez-vous le taux reduit de 5,5 % pour le livre, en version papier ET "
            "numerique (ebook) ?")
question(9, "Sous la franchise (association non assujettie), confirmez-vous qu'aucune TVA "
            "n'est a facturer ni a reverser ? A partir de quel seuil bascule-t-on ?",
         "Les seuils de franchise de TVA ont evolue recemment ; a verifier pour 2026.")
question(10, "Si une TVA devenait applicable, faut-il l'activer dans l'outil de paiement "
             "(Stripe permet de la calculer automatiquement) ? A quel moment ?")

# ----------------------------------------------------------- 4. Facturation / Stripe
h2("4. Facturation et encaissement (Stripe)")
question(11, "Le compte de paiement (Stripe) doit-il etre ouvert au nom de l'association, "
             "avec son SIRET et son IBAN ? Confirmez-vous que l'association est bien le "
             "<< vendeur officiel >> (merchant of record) ?")
question(12, "Quelles mentions doivent figurer sur la facture/le recu remis a l'acheteur "
             "(nom de l'association, SIRET, mention de TVA ou d'exoneration, etc.) ?")
question(13, "Comment comptabiliser les ventes en ligne et les frais preleves par Stripe "
             "(commission par transaction) dans les comptes de l'association ?")

# ----------------------------------------------------------- 5. Divers
h2("5. Points complementaires")
question(14, "Faut-il prevoir quelque chose de particulier pour les ventes a des acheteurs "
             "hors de France (autres pays de l'UE) - TVA, seuils, declaration OSS ?")
question(15, "Le statut associatif est-il vraiment le plus adapte, ou recommanderiez-vous "
             "un autre montage (micro-entreprise de Guy, editeur) au vu de notre situation ?",
         "Pour valider que l'option D est bien la meilleure avant de tout mettre en place.")

# ----------------------------------------------------------- Pied
pdf.ln(4)
para("A apporter au rendez-vous : les statuts de l'association, son numero SIRET, le dernier "
     "bilan/compte de resultat (ou un etat des recettes commerciales), et le prix de vente "
     "prevu du livre (papier et numerique).", gap=1, grey=True)
pdf.ln(1)
para("Ce document est une aide a la preparation. Les seuils et regimes evoluent chaque annee "
     "et relevent de l'appreciation de l'expert-comptable.", italic=True, grey=True)

pdf.output("/home/user/ROP/questions-expert-comptable.pdf")
print("PDF cree.")
