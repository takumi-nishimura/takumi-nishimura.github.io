import { Box, Typography } from "@mui/material";
import React from "react";

const Publication: React.FC = () => {
return (
    <Box>
        <Typography variant='h3' component="div" sx={{ color: 'black', marginBottom: 3}}>Publication</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black'}}>Journal / Conference Papers</Typography>
        <ul>
            <li>Takayoshi Hagiwara, Takumi Katagiri, Hikari Yukawa, Itsuki Ogura, Ryohei Tanada, Takumi Nishimura, Yoshihiro Tanaka, and Kouta Minamizawa. 2021. Collaborative Avatar Platform for Collective Human Expertise. In SIGGRAPH Asia 2021 Emerging Technologies (SA '21). Association for Computing Machinery, New York, NY, USA, Article 2, 1-2, DOI: <a href="https://doi.org/10.1145/3476122.3484841" target="_blank" rel="noreferrer">10.1145/3476122.3484841</a></li>
            <li>萩原 隆義, 湯川 光, 西村 匠生, 棚田 亮平, 田中 由浩, 南澤 孝太, ロボットアバターを通じた身体融合に基づく身体的協調, 日本バーチャルリアリティ学会論文誌, 27 巻, 4 号, p.435-446, 2022, DOI:<a href="https://doi.org/10.18974/tvrsj.27.4_435" target="_blank" rel="noreferrer">10.18974/tvrsj.27.4_435</a></li>
            <li>Tanaka Yoshihiro, Katagiri Takumi, Yukawa Hikari, Nishimura Takumi, Tanada Ryohei, Ogura Itsuki, Hagiwara Takayoshi, Minamizawa Kouta, Sensorimotor Control Sharing with Vibrotactile Feedback for Body Integration through Avatar Robot, Proceedings of IROS KYOTO 2022, Kyoto, Japan, 10, 2022, DOI: <a href="https://doi.org/10.1109/LRA.2022.3191191" target="_blank" rel="noreferrer">10.1109/LRA.2022.3191191</a></li>
            <li>西村匠生, 湯川光, 萩原隆義, 南澤孝太, 田中由浩, 身体融合ロボットアバターにおける触覚フィードバックを用いた運動共有の検討, ロボティクス・メカトロニクス 講演会, 札幌, 6月,2022年.</li>
            <li>西村匠生, 湯川光, 南澤孝太, 田中由浩, 身体融合ロボットアバターにおけるスイッチング融合の検討, 第24回計測自動制御学会システムインテグレーション部門講演会, 3ページ, 新潟, 12月14-16日, 2023年.</li>
            <li>T. Nishimura, H. Yukawa, E. D. Ates, Y. Saraiji, F. Charith and Y. Tanaka, "Enhancing Sense of Agency in GUI-Based Teleoperation Through Robot Trajectory Generation Focused on Motor Imagery," 2024 IEEE/SICE International Symposium on System Integration (SII), Ha Long, Vietnam, 2024, DOI: <a href="https://doi.org/10.1109/SII58957.2024.10417642" target="_blank" rel="noreferrer">10.1109/SII58957.2024.10417642</a></li>
        </ul>
        <Typography variant='h5' component="div" sx={{ color: 'black'}}>Demo</Typography>
        <ul>
            <li>Takumi Nishimura, Hikari Yukawa, Kouta Minamizawa, Yoshihiro Tanaka, Experience System of Physical Skills with a Collaborative Avatar Robot, ICRA Expo in Yokohama, 2024.</li>
        </ul>
        <Typography variant='h5' component="div" sx={{ color: 'black'}}>Workshop</Typography>
        <ul>
            <li><a href="https://cybernetic-being.org/works/virtual-avatar-cafe/" target="_blink" rel="noreferrer">2人で1人!? 共創アバターロボット実験 in 分身ロボットカフェ DAWN ver.β</a></li>
            <li><a href="https://cybernetic-being.org/works/virtual-avatar-cafe/" target="_blink" rel="noreferrer">サイバネティックアバターで働き方はどう変わる？<br /> Cybernetic Avatar Experiment in 分身ロボットカフェ DAWN ver.β</a></li>
        </ul>
    </Box>
);
};

export default Publication;
