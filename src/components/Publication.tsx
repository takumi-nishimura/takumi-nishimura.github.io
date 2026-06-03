import { Box, Typography } from "@mui/material";
import React from "react";

const yearStyle = {
    color: "#666",
    fontWeight: 700,
    marginTop: 3,
    marginBottom: 1,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: 0.5,
} as const;

const sectionStyle = {
    color: "black",
    marginTop: 4,
    marginBottom: 1,
} as const;

const liStyle: React.CSSProperties = { paddingBottom: "13px", lineHeight: 1.7 };

const Publication: React.FC = () => {
    return (
        <Box sx={{ height: "auto" }}>
            <Typography variant="h3" component="div" sx={{ color: "black", marginBottom: 3 }}>Publication</Typography>

            <Typography variant="h5" component="div" sx={{ color: "black" }}>Journal / Conference Papers</Typography>

            <Typography variant="subtitle1" component="div" sx={yearStyle}>2025</Typography>
            <ul>
                <li style={liStyle}><b>西村匠生</b>, 湯川光, 田中由浩. 個性を持った操作エージェント同士の協調による, 協調ポリシーの獲得. 2025 年度人工知能学会全国大会 (第 39 回), 3J1-GS-5-04, 2025. DOI: <a className="link" href="https://doi.org/10.11517/pjsai.JSAI2025.0_3J1GS504" target="_blank" rel="noreferrer">10.11517/pjsai.JSAI2025.0_3J1GS504</a></li>
                <li style={liStyle}><b>西村匠生</b>, 湯川光, 田中由浩. LLM とファジィシステムによる言語推論を活用した階層的ロボットアーキテクチャ. 第 43 回日本ロボット学会学術講演会 (RSJ2025), 1O2-06, 2025.</li>
                <li style={liStyle}>Tomoyuki Ota, <b>Takumi Nishimura</b>, Kazuaki Takeuchi, Ory Yoshifuji, Yuji Hatada, Yoshihiro Tanaka. Training of GUI-Based Avatar Robot Operation Through Sharing Operation with Expert. 2025 34th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN), pp.2353-2359, 2025. DOI: <a className="link" href="https://doi.org/10.1109/RO-MAN63969.2025.11217834" target="_blank" rel="noreferrer">10.1109/RO-MAN63969.2025.11217834</a></li>
                <li style={liStyle}>太田智之, <b>西村匠生</b>, 武内一晃, 吉藤健太朗, 畑田裕二, 田中由浩. アバターロボットの操作学習に対する操作共有に関する基礎検討. 日本機械学会ロボティクス・メカトロニクス講演会 2025 (ROBOMECH2025), 山形, 2025.</li>
                <li style={liStyle}>堀雄貴, 丸山結翔, 難波直樹, <b>西村匠生</b>, 湯川光, 南澤孝太, 田中由浩. 身体融合ロボットアバターにおける陶芸技能者モデルの実装に関する基礎研究. 日本機械学会ロボティクス・メカトロニクス講演会 2025 (ROBOMECH2025), 山形, 2025.</li>
                <li style={liStyle}>丸山結翔, 堀雄貴, 難波直樹, <b>西村匠生</b>, 湯川光, 南澤孝太, 田中由浩. 身体融合ロボットアバターを用いた陶芸体験における技能の評価. 第 43 回日本ロボット学会学術講演会 (RSJ2025), 1N5-03, 2025.</li>
            </ul>

            <Typography variant="subtitle1" component="div" sx={yearStyle}>2024</Typography>
            <ul>
                <li style={liStyle}><b>西村匠生</b>, 湯川光, 田中由浩. テキストで特性を操作可能なカーソルエージェント構築の基礎検討. 第 42 回日本ロボット学会学術講演会 (RSJ2024), 大阪, 2024.</li>
                <li style={liStyle}><b>Takumi Nishimura</b>, Hikari Yukawa, Eren Dogus Ates, Yamen Saraiji, Charith Fernando, Yoshihiro Tanaka. Enhancing Sense of Agency in GUI-Based Teleoperation Through Robot Trajectory Generation Focused on Motor Imagery. 2024 IEEE/SICE International Symposium on System Integration (SII), pp.1052-1057, 2024. DOI: <a className="link" href="https://doi.org/10.1109/SII58957.2024.10417642" target="_blank" rel="noreferrer">10.1109/SII58957.2024.10417642</a></li>
                <li style={liStyle}>丸山結翔, 堀雄貴, 竹内光作, 難波直樹, 鈴木日向, <b>西村匠生</b>, 湯川光, 堀江新, 南澤孝太, 田中由浩. 身体融合ロボットアバターを用いた遠隔陶芸体験. 第 25 回計測自動制御学会システムインテグレーション部門講演会 (SI2024), 1A7-12, 名古屋, 2024.</li>
            </ul>

            <Typography variant="subtitle1" component="div" sx={yearStyle}>2023</Typography>
            <ul>
                <li style={liStyle}><b>西村匠生</b>, 湯川光, 南澤孝太, 田中由浩. 身体融合ロボットアバターにおけるスイッチング融合の検討. 第 24 回計測自動制御学会システムインテグレーション部門講演会 (SI2023), 新潟, 2023.</li>
            </ul>

            <Typography variant="subtitle1" component="div" sx={yearStyle}>2022</Typography>
            <ul>
                <li style={liStyle}>Yoshihiro Tanaka, Takumi Katagiri, Hikari Yukawa, <b>Takumi Nishimura</b>, Ryohei Tanada, Itsuki Ogura, Takayoshi Hagiwara, Kouta Minamizawa. Sensorimotor Control Sharing With Vibrotactile Feedback for Body Integration Through Avatar Robot. IEEE Robotics and Automation Letters, Vol.7, No.4, pp.9509-9516, 2022. DOI: <a className="link" href="https://doi.org/10.1109/LRA.2022.3191191" target="_blank" rel="noreferrer">10.1109/LRA.2022.3191191</a></li>
                <li style={liStyle}>萩原隆義, 湯川光, <b>西村匠生</b>, 棚田亮平, 田中由浩, 南澤孝太. ロボットアバターを通じた身体融合に基づく身体的協調. 日本バーチャルリアリティ学会論文誌, 27 巻 4 号, pp.435-446, 2022. DOI: <a className="link" href="https://doi.org/10.18974/tvrsj.27.4_435" target="_blank" rel="noreferrer">10.18974/tvrsj.27.4_435</a></li>
                <li style={liStyle}><b>西村匠生</b>, 湯川光, 萩原隆義, 南澤孝太, 田中由浩. 身体融合ロボットアバターにおける触覚フィードバックを用いた運動共有の検討. ロボティクス・メカトロニクス講演会 2022 (ROBOMECH2022), 札幌, 2022.</li>
            </ul>

            <Typography variant="subtitle1" component="div" sx={yearStyle}>2021</Typography>
            <ul>
                <li style={liStyle}>Takayoshi Hagiwara, Takumi Katagiri, Hikari Yukawa, Itsuki Ogura, Ryohei Tanada, <b>Takumi Nishimura</b>, Yoshihiro Tanaka, Kouta Minamizawa. Collaborative Avatar Platform for Collective Human Expertise. SIGGRAPH Asia 2021 Emerging Technologies (SA '21), Article 2, pp.1-2, 2021. DOI: <a className="link" href="https://doi.org/10.1145/3476122.3484841" target="_blank" rel="noreferrer">10.1145/3476122.3484841</a></li>
            </ul>

            <Typography variant="h5" component="div" sx={sectionStyle}>Demo & Exhibition</Typography>
            <ul>
                <li style={liStyle}><b>Takumi Nishimura</b>, Hikari Yukawa, Kouta Minamizawa, Yoshihiro Tanaka. Experience System of Physical Skills with a Collaborative Avatar Robot. ICRA Expo in Yokohama, 2024. <a className="link" href="https://youtu.be/hetdur2TwV4" target="_blank" rel="noreferrer">[Video]</a></li>
                <li style={liStyle}><a className="link" href="https://cybernetic-being.org/activities/craftouch_expo2025/" target="_blank" rel="noreferrer">CrafTouch</a> (伝統工芸のデジタル技能伝承プロジェクト), 2024-. 壺屋焼 (育陶園) の陶芸技能をハプティクス・アバターロボットで記録・伝承する取り組みに名古屋工業大学チームとして参画. JAPAN CRAFT EXPO 大阪・関西万博 2025 (2025.6), SusHi Tech Tokyo 2026 (2026.4) に出展.</li>
                <li style={liStyle}>陶芸アバターロボット (CrafTouch) の展示. ロボカップジュニア・ジャパンオープン 2025 名古屋 (ポートメッセなごや), 2025.3.</li>
            </ul>

            <Typography variant="h5" component="div" sx={sectionStyle}>Public Experiments</Typography>
            <ul>
                <li style={liStyle}><a className="link" href="https://cybernetic-being.org/activities/202210_collaborative_avatar_experiment_release/" target="_blank" rel="noreferrer">2 人で 1 人!? 共創アバターロボット実験 in 分身ロボットカフェ DAWN ver.β</a>, 2022.</li>
                <li style={liStyle}><a className="link" href="https://cybernetic-being.org/activities/202304-cybernetic_avatar_experiment/" target="_blank" rel="noreferrer">サイバネティックアバターで働き方はどう変わる？ Cybernetic Avatar Experiment in 分身ロボットカフェ DAWN ver.β</a>, 2023.</li>
            </ul>
        </Box>
    );
};

export default Publication;
