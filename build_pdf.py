#!/usr/bin/env python3
"""Génère la synthèse PDF pour la décision de vente du livre R.O.P."""
from fpdf import FPDF

# Palette inspirée du site (or / encre)
GOLD = (184, 146, 74)
INK = (42, 38, 34)
GREY = (110, 102, 92)
LIGHT = (230, 221, 208)
SAGE_BG = (244, 241, 234)

EURO = "€"
RARR = "→"


class PDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*GREY)
        self.cell(0, 8, "Vente du livre R.O.P. en ligne - note de synthese", align="L")
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
    # fpdf core fonts = latin-1 ; on remplace les caracteres hors jeu.
    repl = {
        "’": "'", "‘": "'", "“": '"', "”": '"',
        "–": "-", "—": "-", "…": "...", " ": " ",
        "→": ">", "✅": "[+]", "⚠": "[!]", "ℹ": "[i]",
        "❌": "[x]", "•": "-",
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
    pdf.set_font("Helvetica", "B", 13)
    pdf.set_text_color(*GOLD)
    pdf.multi_cell(0, 7, clean(txt))
    pdf.set_draw_color(*LIGHT)
    pdf.line(pdf.l_margin, pdf.get_y() + 0.5, pdf.l_margin + 28, pdf.get_y() + 0.5)
    pdf.ln(2.5)


def para(txt, gap=1.6):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "", 10.5)
    pdf.set_text_color(*INK)
    pdf.multi_cell(0, 5.4, clean(txt))
    pdf.ln(gap)


def bullet(txt):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "", 10.5)
    pdf.set_text_color(*INK)
    x = pdf.get_x()
    pdf.set_text_color(*GOLD)
    pdf.cell(5, 5.4, clean("-"))
    pdf.set_text_color(*INK)
    pdf.set_x(x + 5)
    pdf.multi_cell(W - 5, 5.4, clean(txt))
    pdf.ln(0.6)


def eyebrow(txt):
    pdf.set_font("Helvetica", "B", 8.5)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 5, clean(txt.upper()), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.5)


# ---------------------------------------------------------------- Couverture
pdf.ln(6)
eyebrow("Institut R.O.P.  -  Guy Boitout")
h1("Vendre le livre R.O.P. en ligne")
pdf.set_font("Helvetica", "", 12)
pdf.set_text_color(*GREY)
pdf.multi_cell(0, 6, clean("Note de synthese pour decision"))
pdf.ln(1)
pdf.set_font("Helvetica", "", 9.5)
pdf.multi_cell(0, 5, clean("31 mai 2026"))
pdf.ln(4)

# Encadre decision
pdf.set_fill_color(*SAGE_BG)
pdf.set_draw_color(*GOLD)
y0 = pdf.get_y()
pdf.set_line_width(0.6)
pdf.rect(pdf.l_margin, y0, W, 34, style="DF")
pdf.set_line_width(0.2)
pdf.set_xy(pdf.l_margin + 5, y0 + 4)
pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(*GOLD)
pdf.cell(0, 5, clean("DECISION RETENUE"), new_x="LMARGIN", new_y="NEXT")
pdf.set_x(pdf.l_margin + 5)
pdf.set_font("Helvetica", "B", 12)
pdf.set_text_color(*INK)
pdf.multi_cell(W - 10, 6, clean("Option D - L'association vend le livre et verse a Guy un droit d'auteur"))
pdf.set_x(pdf.l_margin + 5)
pdf.set_font("Helvetica", "", 9.5)
pdf.set_text_color(*GREY)
pdf.multi_cell(W - 10, 4.8, clean(
    "L'association (SIRET + compte bancaire deja en place) encaisse les ventes ; "
    "Guy percoit un revenu personnel sous forme de droit d'auteur."))
pdf.set_y(y0 + 38)

# ---------------------------------------------------------------- De quoi s'agit-il
h2("De quoi s'agit-il ?")
para("Le site Internet du livre est pret. Il permet desormais a un visiteur d'acheter le "
     "livre en ligne et de payer par carte bancaire, puis de recevoir automatiquement son "
     "acces par e-mail (sans mot de passe). Le paiement passe par Stripe, le service qui "
     "encaisse les cartes pour le compte du vendeur.")
para("La question a trancher etait : qui vend officiellement le livre ? C'est cette "
     "structure qui ouvre le compte Stripe, dont le nom figure sur les factures, et qui "
     "recoit l'argent. La reponse retenue : l'association.")

# ---------------------------------------------------------------- Pourquoi
h2("Pourquoi l'option D ?")
bullet("L'association a deja un SIRET et un compte bancaire : tout est fonctionnel, elle peut vendre immediatement.")
bullet("Le site de vente est deja construit pour ce fonctionnement - aucune modification informatique necessaire.")
bullet("Guy souhaite un revenu personnel : le droit d'auteur verse par l'association est le mode le plus favorable pour un retraite (peu charge, compatible avec la retraite).")
bullet("La vente reste sous l'ombrelle de l'association, coherente avec l'activite de formation R.O.P. existante.")

# ---------------------------------------------------------------- Tableau comparatif
pdf.add_page()
h2("Rappel : les options etudiees")

cols = [58, 38, 30, W - 58 - 38 - 30]
heads = ["Option", "Qui recoit l'argent", "TVA livre", "Site pret ?"]
rows = [
    ["A. Association seule", "Association", "5,5 %", "Oui"],
    ["B. Auto-entrepreneur", "Guy", "5,5 %", "Oui"],
    ["C. Editeur (droits)", "Guy (royalties)", "Editeur", "Non"],
    ["D. Assoc. + droit d'auteur", "Les deux", "5,5 %", "Oui"],
]
pdf.set_font("Helvetica", "B", 8.5)
pdf.set_fill_color(*INK)
pdf.set_text_color(255, 255, 255)
for w, htxt in zip(cols, heads):
    pdf.cell(w, 7, clean(htxt), border=0, align="L", fill=True)
pdf.ln()
pdf.set_font("Helvetica", "", 8.5)
for i, r in enumerate(rows):
    chosen = r[0].startswith("D.")
    if chosen:
        pdf.set_fill_color(*SAGE_BG)
        pdf.set_font("Helvetica", "B", 8.5)
        pdf.set_text_color(*INK)
    else:
        pdf.set_fill_color(248, 246, 242) if i % 2 else pdf.set_fill_color(255, 255, 255)
        pdf.set_font("Helvetica", "", 8.5)
        pdf.set_text_color(*INK)
    for w, cell in zip(cols, r):
        pdf.cell(w, 7, clean(cell), border=0, align="L", fill=True)
    pdf.ln()
pdf.set_draw_color(*LIGHT)
pdf.line(pdf.l_margin, pdf.get_y(), pdf.l_margin + sum(cols), pdf.get_y())
pdf.ln(3)
pdf.set_font("Helvetica", "I", 8.5)
pdf.set_text_color(*GREY)
pdf.multi_cell(0, 4.5, clean("Le livre (papier et numerique) beneficie du taux reduit de TVA a 5,5 %. "
                             "Sous le plafond d'activite commerciale, l'association n'a pas de TVA a facturer."))

# ---------------------------------------------------------------- A mettre en place
h2("Les 3 choses a mettre en place (hors informatique)")
pdf.set_x(pdf.l_margin); pdf.set_font("Helvetica", "B", 10.5)
pdf.set_text_color(*INK)
pdf.multi_cell(0, 5.4, clean("1. Ouvrir le compte Stripe au nom de l'association"))
para("Avec le SIRET et l'IBAN de l'association. C'est elle le vendeur officiel.")
pdf.set_x(pdf.l_margin); pdf.set_font("Helvetica", "B", 10.5)
pdf.multi_cell(0, 5.4, clean("2. Rediger un contrat d'auteur entre Guy et l'association"))
para("Il fixe le droit d'auteur (pourcentage du prix de vente, ou montant fixe par "
     "exemplaire). Ce document justifie proprement le revenu de Guy. A faire valider par le comptable.")
pdf.set_x(pdf.l_margin); pdf.set_font("Helvetica", "B", 10.5)
pdf.multi_cell(0, 5.4, clean("3. Verifier le plafond avec le comptable"))
para("Confirmer que les revenus commerciaux de l'association (formations + livre) restent "
     "sous le seuil (de l'ordre de 78 000 " + EURO + "/an) qui la rendrait imposable.")

# ---------------------------------------------------------------- Point d'attention
h2("Point d'attention sur le revenu de Guy")
para("Le droit d'auteur verse par l'association a Guy est, en principe, le mode de "
     "remuneration le plus favorable pour un retraite : peu charge en cotisations, "
     "compatible avec la retraite, gere via l'URSSAF artistes-auteurs.")
para("A confirmer avec le comptable : la facon exacte de declarer ce droit d'auteur "
     "(montant, regime, eventuel seuil) selon la situation de retraite de Guy. C'est la "
     "seule zone a border avant de lancer.")

# ---------------------------------------------------------------- Etat technique
h2("Cote technique")
para("La partie informatique (site + paiement par carte) est prete et independante de "
     "cette decision. Il suffira d'y brancher le compte Stripe de l'association une fois "
     "celui-ci cree. Le bouton << Acheter >> reste desactive tant que tout n'est pas en place : "
     "le site continue d'afficher << etre informe de la parution >> jusqu'au lancement.")

# ---------------------------------------------------------------- Avertissement
pdf.ln(4)
pdf.set_draw_color(*LIGHT)
pdf.set_fill_color(250, 248, 244)
yb = pdf.get_y()
pdf.multi_cell(0, 4.6, clean(
    "Avertissement : ce document n'est pas un avis juridique ou fiscal. Les seuils et regimes "
    "evoluent chaque annee et doivent etre confirmes par un expert-comptable, idealement "
    "habitue aux associations loi 1901."), border=0)

pdf.output("/home/user/ROP/synthese-vente-livre-rop.pdf")
print("PDF cree.")
