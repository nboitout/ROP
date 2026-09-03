import { statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const sourceRoot = process.env.CHAPTER_SOURCE_ROOT ?? process.cwd()

const sourceDocuments = {
  introduction: { fr: 'chapter-0/FR/Chapitre_0_Introduction_ROP (3).docx', en: 'chapter-0/EN/Chapter_0_Introduction_ROP_EN_Final_Publishable (1) (1).docx', de: 'chapter-0/DE/Chapter0 Introduction DE.docx', es: 'chapter-0/ES/Chapter0 Introduction ES.docx', it: 'chapter-0/IT/Chapter0 Introduction IT.docx' },
  'chapter-1': { fr: 'chapter-1/FR/Chapitre_1_Generalites_version_publiable.docx', en: 'chapter-1/EN/Chapter_1_General_Considerations_EN_publishable_revised.docx' },
  'chapter-2': { fr: 'chapter-2/FR/Chapitre_2_ROP_version_complete_directement_publiable.docx', en: 'chapter-2/EN/Chapter_2_ROP_Treatment_Medical_English_Revised.docx', de: 'chapter-2/DE/Kapitel_2_ROP_Behandlung_Medizinisches_Deutsch.docx', es: 'chapter-2/ES/Chapter_2_Treatment_by_ROP_Spanish.docx', it: 'chapter-2/IT/Chapter_2_Treatment_by_ROP_Italian.docx' },
  'chapter-3': { fr: 'chapter-3/FR/Chapitre_3_SNC_ROP_version_publiable_sinus_carotidien.docx', en: 'chapter-3/EN/Chapter_3_Central_Nervous_System_ROP_EN_Publishable_Revised.docx' },
  'chapter-4': { fr: 'chapter-4/FR/Chapter4_SNA_revise_FR_final.docx', en: 'chapter-4/EN/Chapter_4_Autonomic_Nervous_System_ROP_EN_Faithful_Translation (1).docx' },
  'chapter-5': { fr: 'Chapter-5 Rework/Chapitre_5_Mecanisme_de_stress_ROP.docx', en: 'Chapter-5 Rework/EN/Chapter_5_Stress_Mechanism_ROP_EN_Publishable.docx', de: 'chapter-5/Chapter5_Stressmechanismus_ROP_DE_fluency_revised.docx', es: 'chapter-5/Chapter5_Mecanismo_de_Estres_ROP_ES_fluency_revised_final.docx', it: 'chapter-5/Chapter5_Meccanismo_dello_Stress_ROP_IT_fluency_revised_final.docx' },
  'chapter-6': { fr: 'chapter-6/FR/Chapitre_6_Theorie_polyvagale_version_publiable.docx', en: 'chapter-6/EN/Chapter_6_Polyvagal_Theory_ROP_EN_Final_Publishable.docx' },
  'chapter-7': { fr: 'chapter-7/FR/Chapitre_7_[NEW]_ Cavites_abdominale_et_peritoneale_socle_regional_revise.docx', en: 'chapter-7/EN/Chapter_7_Abdominal_and_Peritoneal_Cavities_ROP_English_Revised.docx' },
  'chapter-8': { fr: 'chapter-8/FR/Chapitre_8_Diaphragme_version_revisee_protocole_ROP.docx', en: 'chapter-8/EN/Chapter_8_Diaphragm_ROP_Medical_English_Revised.docx' },
  'chapter-9': { fr: 'chapter-9/FR/Chapitre_9_Estomac_version_finale_publiable.docx', en: 'chapter-9/EN/Chapter_9_Stomach_medical_English_revised_EN.docx' },
  'chapter-10': { fr: 'chapter-10/FR/Chapitre_10_Duodenum_version_finale_publiable.docx', en: 'chapter-10/EN/Chapter_10_Duodenum_ROP_Medical_English.docx' },
  'chapter-11': { fr: 'chapter-11/FR/Chapitre_11_Foie_et_voies_biliaires_version_finale_revisee.docx', en: 'chapter-11/EN/Chapter_11_Liver_and_Biliary_Tract_full_medical_English.docx' },
  'chapter-12': { fr: 'chapter-12/FR/Chapitre_12_Pancreas_version_finale_publiable.docx', en: 'chapter-12/EN/Chapter_12_Pancreas_Medical_English_Revised.docx' },
  'chapter-13': { fr: 'chapter-13/FR/Chapitre_13_Rate_version_publiable_A_master_Niveaux_3_4_B.docx', en: 'chapter-13/EN/Chapter_13_Spleen_Medical_English_Revised.docx' },
  'chapter-14': { de: 'chapter-14/DE/Kapitel_14_Duenndarm_ROP_Medizinisches_Deutsch.docx' },
  'chapter-15': { fr: 'chapter-15/Chapitre_15_Colon_et_rectum_version_complete_publisable.docx', en: 'chapter-15/EN/Chapter_15_Colon_and_Rectum_medical_English_revised_EN.docx' },
  'chapter-16': { fr: 'chapter-16/Chapitre_16_Reins_version_finale_publisable.docx', en: 'chapter-16/EN/Chapter_16_Kidneys_Medical_English_Revised.docx' },
  'chapter-17': { fr: 'chapter-17/Chapitre_17_Cavite_pelvienne_socle_regional_niveaux_3_4.docx', en: 'chapter-17/EN/Chapter_17_Pelvic_Cavity_Medical_English_Revised.docx' },
  'chapter-18': { fr: 'chapter-18/Chapitre_18_Vessie_version_finale_publiable.docx', en: 'chapter-18/EN/Chapter_18_Urinary_Bladder_ROP_Medical_English_Revised.docx' },
  'chapter-19': { fr: 'chapter-19/Chapitre_19_Organes_genitaux_feminins_version_finale_publiable.docx', en: 'chapter-19/EN/Chapter_19_Female_Genital_Organs_medical_English_revised_EN.docx' },
  'chapter-20': { fr: 'chapter-20/Chapitre_20_Organes_genitaux_masculins_version_finale_publiable.docx', en: 'chapter-20/EN/Chapter_20_Male_Genital_Organs_Medical_English_Revised.docx' },
  'chapter-21': { fr: 'chapter-21/Chapitre_21_Systeme_erectile_version_finale_publiable.docx', en: 'chapter-21/EN/Chapter_21_Erectile_System_Medical_English_Revised.docx' },
}

const dates = Object.fromEntries(Object.entries(sourceDocuments).map(([chapter, languages]) => [chapter, Object.fromEntries(Object.entries(languages).flatMap(([language, source]) => {
  try {
    return [[language, statSync(join(sourceRoot, 'public', source)).mtime.toISOString()]]
  } catch {
    return []
  }
}))]))

const output = `import type { Lang } from '@/app/i18n/translations'\n\n// Generated from the source Word documents' local modified timestamps.\nexport const chapterSourceModifiedAt: Record<string, Partial<Record<Lang, string>>> = ${JSON.stringify(dates, null, 2)}\n`
writeFileSync(join(process.cwd(), 'lib', 'chapterSourceDates.generated.ts'), output)
